import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
const NavSheet = () => {
  return (
    <div>
        <Sheet>
            <SheetTrigger>
<AlignJustify/>
            </SheetTrigger>
        </Sheet>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>YGN</SheetTitle>
            </SheetHeader>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact Me</Link>
        
        </SheetContent>
    </div>
  )
}

export default NavSheet