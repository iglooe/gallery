import { env } from "~/env"
import { type Config } from "drizzle-kit"

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.POSTGRES_URL,
  },
  tablesFilter: ["gallery_*"],
} satisfies Config
