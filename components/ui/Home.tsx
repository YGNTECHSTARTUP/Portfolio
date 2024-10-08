// "use client"
import React from 'react'
import { Shantell_Sans } from 'next/font/google';
import { TypewriterEffect } from './Typewriter-effect'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';
const shantell = Shantell_Sans({ subsets: ["latin"] });
const description = `
  A passionate full-stack developer with expertise in adaptability. 
  
  Founder of YGNTECHSTARTUP, eager to explore new fields and contribute to open source projects.
`;

// Split the description into words
const words = description.split(/\s+/).filter(word => word.length > 0);
const descriptionArray = words.map(word => {
    if(word === 'YGNTECHSTARTUP,' || word === 'full-stack'  || word === 'developer' || word ==='open' || word === 'source')
    {
        return {text:word,
            className: "text-teal-700 dark:text-blue-500 underline dark:text-violet-700  underline-offset-2 decoration-wavy",
        }
    }
    return { text: word };
  });
const Home = () => {
  return (
    
<div className={shantell.className}>

   <div className='rounded-full hover:scale-105  hover:border-teal-500 dark:hover:border-violet-700 border-black border-4  w-48 h-48 md:w-[18rem] md:h-[18rem] lg:w-96 lg:h-96 bg-black flex justify-center mx-auto'>
<Image src={'/pics.png'} alt='profile pic' height={1020} width={1020}/>
   </div>
   <div className=' text-5xl  lg:text-9xl font-extrabold cursor-default  underline 
      text-teal-950 dark:text-white dark:hover:text-slate-300 '>
             YGN
             <div className='text-xl cursor-default lg:hidden md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-600'>
               <TypewriterEffect words={descriptionArray}/></div>
           </div>
           <div className='lg:block hidden dark:text-white curser-default  text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-black' >
           A passionate full-stack developer with expertise in adaptability. 
     
     Founder of<Link target='_blank' href={'https://github.com/YGNTECHSTARTUP'}>
     <span className='underline  bg-blend-hard-light selection:bg-black  bg-teal-100 dark:text-black dark:bg-fuchsia-300 rounded-2xl cursor-pointer '>
     YGNTECHSTARTUP
       </span>
     </Link> , eager to explore new fields and contribute to open source projects.
   
           </div>
           <div>
            <Link href={'/Resume.pdf'} target='_blank'>
            <Button variant='outline' className='mt-5 bg-black text-white rounded-2xl hover:scale-105 hover:text-teal-100 dark:hover:text-violet-300'>Check out my resume!</Button>
            </Link>
            <Link href={'mailto:gagannaidu2006@gmail.com'}>
            <Button variant='outline' className='mt-5  bg-black text-white rounded-2xl hover:scale-105 hover:text-teal-100 dark:hover:text-violet-300 ml-2'>Hire Me!</Button>            
            </Link>
           </div>
           
       </div>
   
    

)
}

export default Home