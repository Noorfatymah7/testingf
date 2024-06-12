"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import Hero from "@/components/Home/Hero";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const path = usePathname()
  const array=["/contact","/services"]
  console.log(path)

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {array.includes(path) ? null:  <Navbar/>} */}
       {/* <Navbar/> */}
        
      
        {/* <Hero/> */}
        {children}
        </body>
    </html>
  );
}
