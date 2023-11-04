import { Construct } from "constructs";
import * as awsCognito from "aws-cdk-lib/aws-cognito";

import {
  IdentityPool,
  UserPoolAuthenticationProvider,
} from "@aws-cdk/aws-cognito-identitypool-alpha";

interface CognitoAuthProps {
  appName: string;
}

export class CognitoAuth extends Construct {
  readonly userPool: awsCognito.UserPool;
  readonly userPoolClient: awsCognito.UserPoolClient;
  readonly identityPool: IdentityPool;

  constructor(scope: Construct, id: string, props: CognitoAuthProps) {
    super(scope, id);

    this.userPool = new awsCognito.UserPool(
      scope,
      `${props.appName}-userpool`,
      {
        userPoolName: `${props.appName}-userpool`,
        selfSignUpEnabled: true,
        accountRecovery: awsCognito.AccountRecovery.PHONE_AND_EMAIL,
        userVerification: {
          emailStyle: awsCognito.VerificationEmailStyle.CODE,
        },
        autoVerify: {
          email: true,
        },
        standardAttributes: {
          email: {
            required: true,
            mutable: true,
          },
        },
      }
    );

    this.userPoolClient = new awsCognito.UserPoolClient(
      scope,
      `${props.appName}-userpoolClient`,
      { userPool: this.userPool }
    );

    this.identityPool = new IdentityPool(
      scope,
      `${props.appName}-identityPool`,
      {
        identityPoolName: `${props.appName}-identityPool`,
        allowUnauthenticatedIdentities: true,
        authenticationProviders: {
          userPools: [
            new UserPoolAuthenticationProvider({
              userPool: this.userPool,
              userPoolClient: this.userPoolClient,
            }),
          ],
        },
      }
    );
  }
}
