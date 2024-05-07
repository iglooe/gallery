import "server-only"

import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import { and, eq } from "drizzle-orm"

import { db } from "./db"
import { images } from "./db/schema"

export async function getAllImages() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  })

  return images
}

export async function getImage(id: number) {
  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  })
  if (!image) throw new Error("Image not found")
  return image
}

export async function deleteImage(id: number) {
  const user = auth()
  if (!user.userId) throw new Error("Unauthorized")

  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)))
  redirect("/")
}
