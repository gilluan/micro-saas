import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";

import {
  AmplifyGraphqlApi,
  AmplifyGraphqlDefinition,
} from "@aws-amplify/graphql-api-construct";
import { UserPool } from "aws-cdk-lib/aws-cognito";
import { IRole } from "aws-cdk-lib/aws-iam";
import * as path from "path";

interface AppSyncApiProps {
  appName: string;
  userpool: UserPool;
  authRole: IRole;
  unauthRole: IRole;
  identityPoolId: string;
}

export class AppSyncApi extends Construct {
  readonly api: AmplifyGraphqlApi;
  constructor(scope: Construct, id: string, props: AppSyncApiProps) {
    super(scope, id);
    this.api = new AmplifyGraphqlApi(scope, `${props.appName}`, {
      apiName: `${props.appName}`,
      definition: AmplifyGraphqlDefinition.fromFiles(
        path.join(__dirname, "schema.graphql")
      ),
      authorizationModes: {
        defaultAuthorizationMode: "AMAZON_COGNITO_USER_POOLS",
        userPoolConfig: {
          userPool: props.userpool,
        },
        iamConfig: {
          identityPoolId: props.identityPoolId,
          unauthenticatedUserRole: props.unauthRole,
          authenticatedUserRole: props.authRole,
        },
      },
    });
  }
}
