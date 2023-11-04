import * as dotenv from "dotenv";

import path = require("path");

dotenv.config({ path: path.resolve(__dirname, ".env") });

export type ConfigProps = {
  APP_NAME: string;
  BRANCH: string;
  GH_REPO: string;
  GH_OWNER: string;
  GH_TOKEN_NAME: string;
};

export const getConfig = (): ConfigProps => ({
  APP_NAME: process.env.APP_NAME || "example-app",
  BRANCH: process.env.BRANCH || "",
  GH_REPO: process.env.GH_REPO || "",
  GH_OWNER: process.env.GH_OWNER || "",
  GH_TOKEN_NAME: process.env.GH_TOKEN_NAME || "",
});
