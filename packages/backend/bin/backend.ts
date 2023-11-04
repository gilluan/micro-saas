#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { BackendStack } from "../lib/backend-stack";

const app = new cdk.App();
new BackendStack(app, "BackendStack", {
  appName: "micro-saas",
  branch: "main",
  ghRepo: "micro-saas",
  ghOwner: "gilluan",
  ghTokenName:
    "arn:aws:secretsmanager:us-east-1:118246485705:secret:github/loyalty-5ugb8f",
});
