import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://GuestBook_owner:OQudy95PSVAq@ep-divine-recipe-a5en4bgn.us-east-2.aws.neon.tech/GuestBook?sslmode=require",
  },
});
