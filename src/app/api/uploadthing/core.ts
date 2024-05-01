import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 30 } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      const user = auth();

      if (!user.userId) throw new UploadThingError("Unauthorized");

      // update the user id from clerk
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      await db.insert(images).values({
        name: file.name,
        url: file.url,
        userId: metadata.userId,
      });

      console.log("file url", file.url);
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;