import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

import { SimpleUploadButton } from "./simple_upload_button"

export function TopNav() {
  return (
    <div className="flex h-20 items-center justify-center px-2">
      <div className="flex w-full max-w-4xl items-center justify-center">
        <div className="flex size-14 flex-1 items-center justify-end gap-4 p-2">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SimpleUploadButton />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  )
}
