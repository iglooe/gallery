import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple_upload_button";

export default function TopNav() {
  return (
    <>
      <div className="flex gap-6">
        <SignedIn>
          <SimpleUploadButton />
        </SignedIn>
      </div>
      <div className="flex max-w-[900px] flex-1 justify-end pr-1">
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
