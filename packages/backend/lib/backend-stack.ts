import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { createAuth } from "./auth/cognito";
import { createAmplifyGraphQLAPI } from "./api/appsync";
import { createAmplifyHosting } from "./hosting/amplify";

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const appName = "micro-saas";

    const auth = createAuth(this, {
      appName,
    });

    const api = createAmplifyGraphQLAPI(this, {
      appName,
      userpool: auth.userPool,
      identityPoolId: auth.identityPool.identityPoolId,
      authRole: auth.identityPool.authenticatedRole,
      unauthRole: auth.identityPool.unauthenticatedRole,
    });

    createAmplifyHosting(this, {
      account: this.account,
      appName,
      branch: "main",
      repo: "micro-saas",
      ghOwner: "gilluan",
      ghTokenName:
        "arn:aws:secretsmanager:us-east-1:118246485705:secret:github/loyalty-5ugb8f",
    });

    new cdk.CfnOutput(this, "UserPoolId", {
      value: auth.userPool.userPoolId,
    });
    new cdk.CfnOutput(this, "UserPoolClientId", {
      value: auth.userPoolClient.userPoolClientId,
    });
    new cdk.CfnOutput(this, "IdentityPoolId", {
      value: auth.identityPool.identityPoolId,
    });
    new cdk.CfnOutput(this, "AppSyncAPIEndpoint", {
      value: api.graphqlUrl,
    });
    new cdk.CfnOutput(this, "AppSyncAPIId", {
      value: api.resources.graphqlApi.apiId,
    });
    new cdk.CfnOutput(this, "AppSyncAuthType", {
      value: api.resources.cfnResources.cfnGraphqlApi.authenticationType,
    });
    new cdk.CfnOutput(this, "AppRegion", {
      value: this.region,
    });
  }
}
