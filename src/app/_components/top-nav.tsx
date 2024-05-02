import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <>
      <div className="flex max-w-[920px] flex-1 justify-end">
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
