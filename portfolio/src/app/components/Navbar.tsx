'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react';
import { useState } from 'react';
function Navbar() {
    const [nav,setnav]=useState(false);
    const handleclick=()=> setnav(!nav);
  return (
    <div className='fixed w-full flex h-8 justify-between  items-center px 4 bg-slate-900'>
        <div className='pt-2'>
        <Image
        src={"/logo.png"}
        alt='logo'
        width={50}
        height={50}
        />
        </div>
        <div>
            <ul className='hidden md:flex lg:flex text-white'>
            <li className='pl-4'>Home</li>
            <li className='pl-4'>Skills</li>
            <li className='pl-4'>About</li>
            <li className='pl-4'>Work</li>
            <li className='pl-4'>Contact</li></ul>
        </div>
        <div onClick={handleclick} className='md:hidden z-10'>
        <Menu />
        </div>
        <div>
            <ul className={!nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen text-white bg-[#0a192f] md:hidden flex flex-col justify-center items-center'
        }>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li></ul>
        </div>
    </div>
  )
}

export default Navbar