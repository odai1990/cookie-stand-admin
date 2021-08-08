

import Link from 'next/link'
import React from 'react'





export default function Header() {

  return (
   
      <header className=" flex flex-row justify-between bg-green-400">
            <h1 className="py-4 text-4xl font-bold text-center text-gray-800 p-2">
                Cookie Stand Admin
            </h1>
            
            <Link href="/overview" className="p-2"><button>overview </button></Link>
        
        </header>        
      
  )
}