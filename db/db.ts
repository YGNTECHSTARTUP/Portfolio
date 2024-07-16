import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({path:".env"})

const sql = neon("postgresql://GuestBook_owner:OQudy95PSVAq@ep-divine-recipe-a5en4bgn.us-east-2.aws.neon.tech/GuestBook?sslmode=require")
export const db = drizzle(sql)