import { db } from "@/db/db"
import { GuestEntries } from "@/db/schema"


 export const SubmitDb = async ({ids,name,img,hasimg,message}:{
    ids:string,
    img:string,
    name:string | null,
    hasimg:boolean,
    message:string
 }) => {
      await db.insert(GuestEntries).values({
         ids,
         name,
         img,
         hasimg,
         message
      })
}