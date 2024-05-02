import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple_upload_button";

export default function TopNav() {
  return (
    <>
      <div className="flex max-w-[920px] flex-1 justify-end">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <div className="flex flex-row space-x-3">
          <SignedIn>
            <SimpleUploadButton />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
}
