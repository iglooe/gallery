"use client";

import { useRouter } from "next/navigation";

import { Button } from "./ui/button";
import { Icons } from "./icons";

export function ExitButton() {
  const router = useRouter();
  return (
    <div className="absolute left-0 top-0 p-1">
      <Button
        onClick={() => router.back()}
        variant="ghost"
        size="icon"
        className="dark rounded-none"
      >
        <Icons.x className="h-6 w-6 text-black" />
      </Button>
    </div>
  );
}
