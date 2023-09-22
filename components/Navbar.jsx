import React from 'react'
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  return (
          <nav className="flex w-screen justify-between p-2 content-center md:px-16 border-b dark:border-zinc-600 bg-white dark:bg-zinc-950">
            <Link href={"/"} className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 my-auto">Repo List</Link>
            
         <ModeToggle/>

          </nav>
  )
}

export default Navbar
