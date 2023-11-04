"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";

import { cn } from "@/lib/utils";

import { UserNav } from "@/components/user-nav";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MainNav({ user, signOut }: WithAuthenticatorProps) {
  const pathname = usePathname();

  const links = [
    {
      href: "/todo",
      name: "Todo",
    },
  ];

  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Avatar className="">
            <AvatarImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuDKHiDIFtx1QYqRTUER3h7nLpCsHe5UXH91VriM7Xg&s"
              alt="Amplify"
            />
            <AvatarFallback>AWS</AvatarFallback>
          </Avatar>
        </Link>
        <nav className="flex space-x-4 lg:space-x-6 mx-6 justify-start">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="ml-auto ml-16 flex items-center space-x-4 justify-end">
          <UserNav signOut={signOut} user={user} />
        </div>
      </div>
    </div>
  );
}
