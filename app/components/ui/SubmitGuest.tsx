"use client"
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import React, { useEffect } from 'react'
import { Input } from './Input'
import { SubmitDb } from '@/app/util/SubmitGuest'

interface SubmitGuestProps{
    ids:string,
    img:string,
    name:string | null
    hasimg:boolean,
   
}



const SubmitGuest = ({ids,img,name,hasimg}:SubmitGuestProps) => {
  const [message,setmessage] = React.useState('')
  const prohib = "Boobre"
   
    const SubmitDbs = () => {
      if(message.length < 1){
        alert("Please Enter a Message")
        return
      }
      if(message == prohib.toLowerCase() || message.includes(prohib.toLowerCase())){
        alert("Angel Prince,Kappa Lanja,Athul,Punugulu,Molal,Gandhi")
        return
      }
      SubmitDb({ids,name,img,hasimg,message})
      setmessage("")
      alert("Message Submitted")
      
    }
    console.log(message)
  return (
    <div>
         <h1 className='text-center text-4xl lg:text-6xl font-extrabold mt-5'>Guest Book</h1>
        <div className="md:flex justify-center p-5 gap-5  ">   <Input placeholder="Leave Your Message Here" onChange={(e)=>setmessage(e.target.value)} className="max-w-lg focus:border-teal-400  dark:focus:border-purple-500"/>
          <Button variant={'outline'} onClick={SubmitDbs}  className="mt-4 md:mt-0 hover:bg-teal-500 dark:hover:bg-purple-500">Submit<ArrowRight/></Button></div>
    </div>
  )
}

export default SubmitGuest