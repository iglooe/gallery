"use client"

import { useRouter } from "next/navigation"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export function BackButton() {
  const router = useRouter()
  return (
    <div className="absolute left-0 top-0 p-2">
      <Button
        onClick={() => router.back()}
        size="icon"
        variant="outline"
        className="dark rounded-full"
      >
        <Icons.back className="size-4 text-white md:size-6" />
      </Button>
    </div>
  )
}
