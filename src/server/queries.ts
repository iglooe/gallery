import "server-only";
import { db } from "./db";

export async function GetImages() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}
