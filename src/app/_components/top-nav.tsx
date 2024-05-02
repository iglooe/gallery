import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple_upload_button";

export default function TopNav() {
  return (
    <>
      <div className="flex gap-6">
        <SimpleUploadButton />
      </div>
      <div className="flex flex-1 sm:justify-end">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </>
  );
}
