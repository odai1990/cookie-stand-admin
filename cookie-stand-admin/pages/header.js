import Head from 'next/head'

import Link from 'next/link'
import React from 'react'





export default function Header() {

  return (
    <React.Fragment>
      <Head className="">
        <title className="">Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" flex flex-row justify-start bg-green-400">
            <h1 className="py-4 text-4xl font-bold text-center text-gray-800 p-2">
                Cookie Stand Admin
            </h1>
        
        </header>
        </React.Fragment>
      
  )
}