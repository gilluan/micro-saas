"use client";
import { useState, useEffect } from "react";
import { ProfileCreateForm } from "@/app/ui-components";
import { Separator } from "@/components/ui/separator";
import { API } from "aws-amplify";
import { listProfiles } from "../graphql/queries";

export default function ProfilePage() {
  const [profile, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () =>
      await API.graphql({
        query: listProfiles,
      });
    fetchProfiles().then((i: any) => setProfiles(i?.data?.listProfiles?.items));
  }, []);

  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Profile</h2>
          <p className="text-muted-foreground">Manage your profile settings.</p>
        </div>
        <Separator className="my-6" />
        <ProfileCreateForm />
      </div>
    </>
  );
}
