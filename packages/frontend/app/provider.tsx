import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({ ...awsconfig, ssr: true });

export function AmplifyProvider({ children }: any) {
  return <>Formiga{children}</>;
}

export default withAuthenticator(AmplifyProvider);
