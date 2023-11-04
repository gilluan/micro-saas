import { Duration, SecretValue } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as amplify from "@aws-cdk/aws-amplify-alpha";
import { BuildSpec } from "aws-cdk-lib/aws-codebuild";
import {
  Effect,
  PolicyDocument,
  PolicyStatement,
  Role,
  ServicePrincipal,
} from "aws-cdk-lib/aws-iam";

export interface AmplifyHostingProps {
  appName: string;
  account: string;
  branch: string;
  ghOwner: string;
  ghRepo: string;
  ghTokenName: string;
  deployCdk?: boolean;
}

import { getConfig } from "../../config";

const config = getConfig();

export class AmplifyHosting extends Construct {
  readonly name: string;
  constructor(scope: Construct, id: string, props: AmplifyHostingProps) {
    super(scope, id);

    let amplifyDeployCDKRole;

    if (props.deployCdk) {
      amplifyDeployCDKRole = new Role(scope, "allow-amplify-deploy-cdk-role", {
        assumedBy: new ServicePrincipal("amplify.amazonaws.com"),
        description: `Role assumed by Amplify Hosting for deploying aws cdk`,
        roleName: `${props.ghRepo}-amplify-deploy-from-cdk`,
        maxSessionDuration: Duration.hours(1),
        inlinePolicies: {
          CdkDeploymentPolicy: new PolicyDocument({
            assignSids: true,
            statements: [
              new PolicyStatement({
                effect: Effect.ALLOW,
                actions: ["sts:AssumeRole"],
                resources: [`arn:aws:iam::${props.account}:role/cdk-*`],
              }),
              new PolicyStatement({
                effect: Effect.ALLOW,
                actions: ["appsync:GetIntrospectionSchema"],
                resources: [`*`],
              }),
            ],
          }),
        },
      });
    }

    const commandsToDeployCdk = props.deployCdk
      ? ["cd ../backend", "npm ci", "npm run deploy:ci", "cd ../frontend"]
      : [];

    const amplifyApp = new amplify.App(scope, `${props.appName}-hosting`, {
      appName: `${props.appName}`,
      role: amplifyDeployCDKRole || undefined,
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: props.ghOwner,
        repository: props.ghRepo,
        oauthToken: SecretValue.secretsManager(props.ghTokenName),
      }),
      autoBranchDeletion: true,
      platform: amplify.Platform.WEB_COMPUTE,
      customRules: [
        {
          source: "/<*>",
          target: "/index.html",
          status: amplify.RedirectStatus.NOT_FOUND_REWRITE,
        },
      ],
      environmentVariables: {
        AMPLIFY_MONOREPO_APP_ROOT: "packages/frontend",
        ...config,
      },
      buildSpec: BuildSpec.fromObjectToYaml({
        version: 1,
        applications: [
          {
            appRoot: "packages/frontend",
            frontend: {
              phases: {
                preBuild: {
                  commands: [...commandsToDeployCdk, "npm ci"],
                },
                build: {
                  commands: ["npm run build"],
                },
              },
              artifacts: {
                baseDirectory: ".next",
                files: ["**/*"],
              },
              cache: {
                paths: ["node_modules/**/*"],
              },
            },
          },
        ],
      }),
    });

    amplifyApp.addBranch(props.branch, {
      stage: props.branch === "main" ? "PRODUCTION" : "DEVELOPMENT",
      branchName: props.branch,
    });
  }
}
