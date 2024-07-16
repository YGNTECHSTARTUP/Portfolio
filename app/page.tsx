import React from 'react'
import GridBackgroundDemo from './components/ui/dotbackround'
import Home from '@/components/ui/Home'
//import Icons from './Links/page'

const page = () => {
  return (
    <div className='font-sans text-9xl text-grey-900 text-center   bg-white dark:bg-black dark:selection:text-fuchsia-300 scroll-smooth overflow-hidden  selection:text-teal-800  '>
      <GridBackgroundDemo >
        <Home/>
       
       
      </GridBackgroundDemo>
    </div>
  )
}

export default page