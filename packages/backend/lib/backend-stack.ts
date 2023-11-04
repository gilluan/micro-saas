import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { CognitoAuth } from "./auth/cognito";
import { AppSyncApi } from "./api/appsync";
import { AmplifyHosting } from "./hosting/amplify";

export interface BackendStackProps extends cdk.StackProps {
  appName: string;
  branch: string;
  ghRepo: string;
  ghOwner: string;
  ghTokenName: string;
}

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: BackendStackProps) {
    super(scope, id, props);

    const auth = new CognitoAuth(this, `${props.appName}-cognito-auth`, {
      appName: props.appName,
    });

    const appSync = new AppSyncApi(this, `${props.appName}-appsync-api`, {
      appName: props.appName,
      userpool: auth.userPool,
      identityPoolId: auth.identityPool.identityPoolId,
      authRole: auth.identityPool.authenticatedRole,
      unauthRole: auth.identityPool.unauthenticatedRole,
    });

    new AmplifyHosting(this, `${props.appName}-amplify-hosting`, {
      account: this.account,
      appName: props.appName,
      branch: props.branch,
      ghRepo: props.ghRepo,
      ghOwner: props.ghOwner,
      ghTokenName: props.ghTokenName,
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
      value: appSync.api.graphqlUrl,
    });
    new cdk.CfnOutput(this, "AppSyncAPIId", {
      value: appSync.api.resources.graphqlApi.apiId,
    });
    new cdk.CfnOutput(this, "AppSyncAuthType", {
      value:
        appSync.api.resources.cfnResources.cfnGraphqlApi.authenticationType,
    });
    new cdk.CfnOutput(this, "AppRegion", {
      value: this.region,
    });
  }
}
