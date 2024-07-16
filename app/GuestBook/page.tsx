// "use client"
import React from 'react'
import { Input } from '../components/ui/Input'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
const Page = async () => {
// const {userId} =  auth()

const submitguest = async () => {
  const user = await currentUser()
  console.log(user)
}
  // console.log(userId)
  return (
    <div className=''>
        <h1 className='text-center text-4xl lg:text-6xl font-extrabold mt-5'>Guest Book</h1>
        <div className="md:flex justify-center p-5 gap-5  ">   <Input placeholder="Leave Your Message Here" className="max-w-lg focus:border-teal-400  dark:focus:border-purple-500"/>
          <Button variant={'outline'}  className="mt-4 md:mt-0 hover:bg-teal-500 dark:hover:bg-purple-500">Submit<ArrowRight/></Button></div>
   <Card className='bg-slate-200 dark:bg-slate-600 container mx-auto '>
<CardContent>
  <UserButton/>

</CardContent>
   </Card>
    </div>
  )
}

export default Page