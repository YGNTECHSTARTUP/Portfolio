import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-full">
    <SignIn/>
            
        </div>
  )
}

export default page