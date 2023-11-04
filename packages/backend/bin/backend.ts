#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";

import { BackendStack } from "../lib/backend-stack";

import { getConfig } from "../config";

const config = getConfig();

const app = new cdk.App();
new BackendStack(app, "BackendStack", {
  appName: config.APP_NAME,
  branch: config.BRANCH,
  ghRepo: config.GH_REPO,
  ghOwner: config.GH_OWNER,
  ghTokenName: config.GH_TOKEN_NAME,
});
