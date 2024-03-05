'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { XCircle } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
function Navbar() {
    const [nav,setnav]=useState(false);
    const handleclick=()=> setnav(!nav);
  return (
    <div className='fixed w-full flex h-12 justify-between  items-center px 4 bg-slate-900'>
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
            {!nav? <Menu /> :<XCircle /> }
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
        {/* <div className='flex flex-col md:hidden top-[50%] left-0 text-white '>
<ul><li><Instagram /></li>
<li><Linkedin /></li>
<li><Facebook /></li></ul>
        </div> */}
    </div>
  )
}

export default Navbar