import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/ui/navbar";
import { Shantell_Sans } from "next/font/google";
 const shantell = Shantell_Sans({ subsets: ["latin"] });
 import { ThemeProvider } from "@/components/theme-provider";
export const metadata: Metadata = {
  title: "YGN Portfolio",
  description: "Welcome to YGN's portfolio! Discover innovative projects, technical expertise, and creative solutions. Explore TechStack, skills, and achievements all in one place",
};
import {
  ClerkProvider,
} from '@clerk/nextjs'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
<html lang="en">
      <body className={shantell.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
   <Navbar/>
   {children}
          </ThemeProvider>
     
        </body>
    </html>
    </ClerkProvider>
    
  );
}
