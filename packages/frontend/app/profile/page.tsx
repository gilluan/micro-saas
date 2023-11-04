"use client";

import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Profile</h2>
          <p className="text-muted-foreground">Manage your profile settings.</p>
        </div>
        <Separator className="my-6" />
      </div>
    </>
  );
}
