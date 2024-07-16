// "use client"
import React from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import SubmitGuest from '../components/ui/SubmitGuest'
import { db } from '@/db/db'
import { GuestEntries } from '@/db/schema'
import Image from 'next/image'
import dynamic from 'next/dynamic'
export const runtime = dynamic
const Page = async () => {
  
  const users = async () => {
    const us = await db.select().from(GuestEntries)
    return us
  }
  const res = await users().then((r)=>r.reverse())
  
  console.log(res)

  const user = await currentUser()
  let isme = false
  const usernames = user?.username || ''

  return (
    <div className=''>
      {
         user &&  <SubmitGuest ids={user.id} img={user.imageUrl} name={user.username ?? user.firstName} hasimg={user.hasImage}/>
      }
        <Card className='bg-slate-200 dark:bg-slate-600 container mx-auto '>
<CardContent>
  <UserButton/>
 <div className='container mx-auto'>
{
  res.map((r)=>
    {
       if(r.name == usernames){
          isme = true
       }
      
    return (
      <Card key={r.id} className='bg-slate-100 mt-9 dark:bg-slate-950 max-w-3xl container mx-auto' >
        <CardHeader className={isme?'flex flex-col items-start':'flex flex-col items-end'}>
          <Image src={r.img || '/pics.png'} alt={r.img || 'djf'} height={24} width={24} className='w-20 h-20 rounded-full'/>
          <CardTitle className='text-teal-500 text-2xl dark:text-purple-500'>{r.name}</CardTitle>
        </CardHeader>
        <CardContent className={isme?'flex flex-col items-start':'flex flex-col items-end'}>
          <CardDescription className='text=black dark:text-white'>{r.message}</CardDescription>
        </CardContent>
      </Card>
    
    )
  })
}
 </div>
</CardContent>
   </Card>
    </div>
  )
}

export default Page