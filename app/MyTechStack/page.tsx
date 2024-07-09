import React from 'react'
import GridBackgroundDemo from '../components/ui/dotbackround'
import Image from 'next/image'


const page = () => {
  return (
<GridBackgroundDemo>
<div className=' font-extrabold items-center mx-auto text-center underline text-black dark:text-white '>
        My Tech Stack
        <Image src={'/techstack.png'} alt='tech_stack' width={1040} height={1040}/>
        </div>
<div>

</div>
</GridBackgroundDemo>
)
}

export default page