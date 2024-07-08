import React from 'react'
import { DotBackgroundDemo } from '../components/ui/Dottbackground'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <DotBackgroundDemo>
      <div className='overflow-hidden'>
      <div className='font-extrabold text-center underline text-black dark:text-white '>
            About Me
        </div>
      <div className='text-black  dark:text-white lg:flex'>
      <div className='rounded-full mt-[5%] hover:scale-105 lg:hidden  hover:border-teal-500 dark:hover:border-violet-700 border-black border-4  w-48 h-48 md:w-[18rem] md:h-[18rem] lg:w-96 lg:h-96 bg-black flex justify-center mx-auto'>
<Image src={'/pic3.jpg'} alt='profile pic' height={1020} width={1020}/>
   </div>
       <div className='text-sm mt-4 lg:text-[1.1rem] xl:text-lg 2xl:text-xl'>
        <ul className='list-disc m-5'>
        <li className='m-5'>
      Hey I&apos; m Gagan aka <Link href={'https://github.com/YGNTECHSTARTUP'} target='_blank' >
      <span className='text-teal-700  underline dark:text-violet-700  underline-offset-2 decoration-wavy'>YGN</span>
      </Link> on the web. I&apos;m a 17 y/o student belonging to the Homo Sapiens species,I am a brother, a son, a friend, a self taught web developer and programmer, an open source enthusiasist,and also an extreme <span className='text-teal-700  underline dark:text-violet-700  underline-offset-2 decoration-wavy'>
      Quiet Storm
        </span>
        </li>
        <li className='m-5'>
        As my age suggests, I&apos;m a <span className='text-teal-700  underline dark:text-violet-700  underline-offset-2 decoration-wavy'>
        student
          </span>  who had completed a diploma in Computer Science and  currently pursuing a B.Tech (2nd year). If you want to know what programming languages I know, they are TypeScript, Python, and a little bit of Java and C++.
    </li>
    <li className='m-5'>
    I had  started programming back when I was in Diploma 1st year as we had C language in our  curriculum. I started web development one year later and I like working on the web a lot (mostly frontend).
    </li>
        <li className=' m-5'>
        Currently, I&apos;m working on
        <Link target='_blank' href={'https://nextjs.org/'}>
        <span className='text-teal-700  underline dark:text-violet-700  underline-offset-2 decoration-wavy'>&nbsp;[Nextjs]</span> on the web. and i wanna excited to explore about 
     
        </Link>
           &nbsp;
        <span className='text-teal-700  underline dark:text-violet-700  underline-offset-2 decoration-wavy'>
           Web3 
        </span>
        &nbsp;
        </li>
       <li className='m-5'>
       Things I do other than dev and programming? Not much, but I go outside just walk around (touching grass is important). I also just like to go on the terrace with soft music and watch clouds pass by 😳. I&apos;ve also like to play games (only
       <Link target='_blank' href={'https://genshin.hoyoverse.com/en/'}>
       <span className='text-teal-700  underline dark:text-violet-700  underline-offset-2 decoration-wavy'>
        GENSHIN IMPACT
        </span>
       </Link>
        ). Apart from these, I don&apos;t have much to do other than overthinking and staring at my phone screen.
       </li>
       <li className='m-5'>
       I don&apos;t talk much over any platform but I like making friends (be it online or irl though I&apos;m somewhat introverted!). So, in case you want to talk about anything, just hit me up and I&apos;ll get back to you once I&apos;m active/online. All my social links are listed
       <span className='text-teal-700  underline dark:text-violet-700  underline-offset-2 decoration-wavy' >
       here
       </span >
       .
       </li>
       <li className='m-5'>
       That&apos;s pretty much everything I know about me yet. In case you know something about me that I still don&apos;t, please let me know - I&apos;ll add it
       
       <span className='text-teal-700  underline dark:text-violet-700  underline-offset-2 decoration-wavy' > here
        </span>.
       </li>
        </ul>
       
       
       </div>
   
  
   <div className=' justify-end border-l-2 decoration-wavy  hidden lg:block  border-black border-4  overflow-hidden   bg-black   mx-auto '>
<Image src={'/pic4.jpg'} alt='profile pic' height={1000} width={1000}/>
   </div>
   

        </div>
      </div>
 
    </DotBackgroundDemo>
       
        
    
  )
}

export default page