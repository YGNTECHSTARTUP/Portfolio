import React from 'react'
import { SocialIcon } from 'react-social-icons'
const Icons = () => {
    const links = ["https://www.youtube.com/@gaganyt7861","https://github.com/YGNTECHSTARTUP","https://www.linkedin.com/in/gagan-naidu-2b99931b8/","https://www.instagram.com/cyberboy_ygn/","https://x.com/GaganNaidu35982","https://dev.to/ygntechstartup"]
  return (
    <div>
        
          <div className='container mx-auto gap-3 flex justify-center items-center min-h-screen min-w-full'>
         
     {
       links.map((link,ind)=>(
        <SocialIcon key={ind} url={link} />
       ))
     }
    </div>
    </div>
    
  )
}

export default Icons