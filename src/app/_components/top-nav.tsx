import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
