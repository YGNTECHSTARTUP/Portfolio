import React from 'react'
import { GlobeDemo } from '../components/ui/gitGlobe'
import { SocialIcon } from 'react-social-icons'
const page = () => {
  const links = ["https://www.youtube.com/@gaganyt7861","https://github.com/YGNTECHSTARTUP","https://www.linkedin.com/in/gagan-naidu-2b99931b8/","https://www.instagram.com/cyberboy_ygn/","https://x.com/GaganNaidu35982","https://dev.to/ygntechstartup"]

  return (
    <div className='dark:bg-black'>
          &nbsp;
        
            <GlobeDemo/>
            <div className='flex justify-center mt-12'>
            {
       links.map((link,ind)=>(
        <SocialIcon key={ind} url={link} className='gap-3' />
       ))
     }
            </div>
           
      
    </div>
  )
}

export default page