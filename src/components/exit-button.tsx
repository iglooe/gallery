"use client";

import { useRouter } from "next/navigation";

import { Button } from "./ui/button";
import { Icons } from "./icons";

export function ExitButton() {
  const router = useRouter();
  return (
    <div className="absolute left-0 top-0 p-2">
      <Button
        onClick={() => router.back()}
        size="icon"
        className="rounded-full"
      >
        <Icons.x className="h-6 w-6" />
      </Button>
    </div>
  );
}
