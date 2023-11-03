"use client";

import React from "react";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import { MainNav } from "@/components/main-nav";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";

import { Authenticator } from "@aws-amplify/ui-react";

import "./globals.css";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({ ...awsconfig, ssr: true });

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Authenticator loginMechanisms={["email"]} variation="modal">
          {({ signOut, user }) => (
            <div className="hidden flex-col md:flex">
              <MainNav user={user} signOut={signOut} />
              {children}
            </div>
          )}
        </Authenticator>
      </body>
    </html>
  );
}
