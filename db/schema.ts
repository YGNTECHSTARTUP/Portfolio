
import { boolean, pgTable, serial, text} from "drizzle-orm/pg-core";

export const GuestEntries = pgTable("guest_Entries",{
    id:serial("id").primaryKey(),
    name:text("name"),
    img:text("img"),
    ids:text("ids"),
    hasimg:boolean("hasimg"),
    message:text("message").notNull()
})