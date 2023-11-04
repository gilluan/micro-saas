"use client";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

export default function CampaignPage() {
  const router = useRouter();
  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Todo</h2>
          <p className="text-muted-foreground">
            Manage your campaign settings.
          </p>
        </div>
        <Separator className="my-6" />
      </div>
    </>
  );
}
