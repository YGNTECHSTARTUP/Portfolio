"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "./Button"
import { MoonStar } from "lucide-react"
import { SunMedium } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropDown"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full border-4 dark:border-2   ">
          <SunMedium className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" fill="black" size={45} />
          <MoonStar className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"  fill="black" size={25}/>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className=" ml-[100%]  sm:ml-[60%] sm:mt-[5%] md:ml-0 md:mt-0">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
