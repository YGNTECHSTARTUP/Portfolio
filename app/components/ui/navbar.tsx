"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/app/util/cn";



export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">About Me</HoveredLink>
            <HoveredLink href="/interface-design">My Skills</HoveredLink>
            <HoveredLink href="/seo">My Journey</HoveredLink>
            <HoveredLink href="/branding">Links</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="AANM-VVRSR"
              href="https://aanm-vvrsr.vercel.app/"
              src="/AANM-VVRSR.png"
              description="AANM VVRSR is a collage website that has better performance then the official website because it was built on the top of the Nextjs and here we used Tailwind Css for Styling"

            />
            {/* <ProductItem
              title="YGNDiscussions"
              href="https://aanm-vvrsr.vercel.app/"
              src="/AANM-VVRSR.png"
              description=" YGNDiscussions: Your go-to platform for vibrant tech discussions! This Stack Overflow clone brings together a community of tech enthusiasts, where you can ask, answer, and explore a myriad of technical questions and topics."

            />
            <ProductItem
              title="Price Tracker"
              href="https://aanm-vvrsr.vercel.app/"
              src="/AANM-VVRSR.png"
              description="Price Tracker is built on the concept of WebsCaraping it Scrape the product Data from The Amazon And track the Product Details"
            /> */}
            <ProductItem
              title="YGNTECHSTARTUP"
              href="https://github.com/YGNTECHSTARTUP"
              src="/Git-hub.png"
              description="YGNTECHSTARTUP is a Github Organization that is built to help the Tech Enthusiast"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Me">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Mail</HoveredLink>
            <HoveredLink href="/individual">Twitter</HoveredLink>
            <HoveredLink href="/team">Linkedin</HoveredLink>
            <HoveredLink href="/enterprise">Discord</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
