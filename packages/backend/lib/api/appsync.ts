import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";

import {
  AmplifyGraphqlApi,
  AmplifyGraphqlDefinition,
} from "@aws-amplify/graphql-api-construct";
import { UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito";
import { IRole } from "aws-cdk-lib/aws-iam";
import * as path from "path";

type AmplifyGraphQLAPIProps = {
  appName: string;
  userpool: UserPool;
  authRole: IRole;
  unauthRole: IRole;
  identityPoolId: string;
};

export const createAmplifyGraphQLAPI = (
  scope: Construct,
  props: AmplifyGraphQLAPIProps
) => {
  const api = new AmplifyGraphqlApi(scope, `${props.appName}`, {
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

  return api;
};
