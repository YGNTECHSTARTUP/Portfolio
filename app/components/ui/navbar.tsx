import React from 'react'
import { CircleArrowDown } from 'lucide-react'
import { Sheet, SheetClose, SheetContent,  SheetHeader,  SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ModeToggle } from '@/components/ui/Toggle'
const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/AboutMe" },
  { name: "My Tech Stack", href: "/MyTechStack" },
  { name: "Projects", href: "/Projects" },
  { name: "GuestBook", href: "/GuestBook" },
  { name: "ContactMe", href: "/ContactMe" }
];

const navlink = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/AboutMe" },
  { name: "GuestBook", href: "/GuestBook" }
];

const nav = [
  { name: "My Tech Stack", href: "/MyTechStack" },
  { name: "Projects", href: "/Projects" },
  { name: "ContactMe", href: "/ContactMe" }
];

const navbar = () => {
  return (
    <div className='md:ml-[2%] flex w-full z-20 dark:bg-slate-900   h-16 justify-between bg-slate-100 rounded-full  text-center p-2 mt-[5%] sm:w-[95%]  mx-auto'>
   <Link href={'/'}>
   <div className='text-3xl font-extrabold mt-2 ml-[50%] cursor-pointer hover:underline hover:text-teal-700 dark:hover:text-violet-700'>YGN</div>
   </Link>
    <div className='md:hidden flex '>
      <div className='mt-2 '>
      <ModeToggle/>

      </div>
    
&nbsp;
    <Sheet >
      <SheetTrigger >
      <CircleArrowDown fill="black" size={45} className='mt-1  text-white  delay-1000 ease-in-out transition-transform '/>
      </SheetTrigger>
      <SheetContent side={'top'} className='transition '>
      <SheetHeader >
        {
          NavLinks.map((link) => (
            <Link key={link.href} href={link.href} >
              <SheetClose>
              <Button  variant='link' className='text-2xl font-bold hover:text-teal-700 dark:hover:text-violet-700'>{link.name}</Button>
            
              </SheetClose>
           
            </Link>
          ))
        
        }
        </SheetHeader>
      </SheetContent>
    </Sheet>
    </div>
    <div className='hidden md:flex lg:hidden mt-2 hover:underline '>
    
     {
         navlink.map((link)=><Link key={link.name} href={link.href}><Button variant='link' className='text-2xl font-bold hover:text-teal-700 dark:hover:text-violet-700'>{link.name}</Button></Link>)
     }
     <ModeToggle/>
     &nbsp;
    <Sheet>
      <SheetTrigger>
      <CircleArrowDown fill="black" size={45} className='-mt-1  text-white'/>
      </SheetTrigger>
      <SheetContent side={'top'} className='transition '>
      <SheetHeader>
        {
          nav.map((link) => (
            <Link key={link.name} href={link.href}>
            <Button  variant='link' className='text-2xl font-bold hover:text-teal-700 dark:hover:text-violet-700'>{link.name}</Button>
            </Link>
          ))
        
        }
        </SheetHeader>
      </SheetContent>
    </Sheet>
    </div>
    <div className='mt-3 hidden lg:flex text-lg xl:text-xl font-extrabold  '>
      
      {
        NavLinks.map((link)=>
            <Link key={link.name} href={link.href} className='ml-10 hover:underline hover:text-teal-600 dark:hover:text-violet-700' >
            {link.name}
            </Link>
          )
        
      }&nbsp;&nbsp;
    <div className='-mt-1'>
    <ModeToggle/>
      
    </div>
      
      
      
    </div>
    
    
  
    </div>
  )
}

export default navbar