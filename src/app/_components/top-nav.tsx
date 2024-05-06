import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Icons } from "~/components/icons";
import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";
import { SimpleUploadButton } from "./simple_upload_button";

export function TopNav() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="h-18 flex space-x-4 py-2">
        <div className="flex flex-1 items-center justify-start space-x-4">
          <Alert className="flex items-center space-x-1">
            <Icons.alert />
            <AlertTitle>This is a demo site.</AlertTitle>
            <AlertDescription>
              Uploading images is disabled by default.
            </AlertDescription>
          </Alert>
        </div>
        <div className="flex items-center space-x-2">
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
  );
}
