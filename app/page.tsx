import React from 'react'
import GridBackgroundDemo from './components/ui/dotbackround'
import Home from '@/components/ui/Home'
const page = () => {
  return (
    <div className='font-sans text-9xl text-grey-900 text-center scroll-smooth overflow-hidden  selection:text-teal-800 bg-black '>
      <GridBackgroundDemo >
        <Home/>
      </GridBackgroundDemo>
    </div>
  )
}

export default page