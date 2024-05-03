'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react';
import Skills from './Skills';
import { useState } from 'react';
import { XCircle } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import Work from './Work';

function Navbar() {

    
    const [nav,setnav]=useState(false);
    const handleclick=()=> setnav(!nav);
  return (
    <div className=' w-full flex h-12 justify-between  items-center px 4 bg-slate-900'>
        <div className='TEXT text-yellow-600 text-3xl font-bold pl-3 '>
       <h1>Shahroze Ali</h1>
        </div>
        <div>
            <ul className='hidden md:flex lg:flex text-white'>
            <li className='pl-4'>
              {/* <Link 
      activeClass="active" 
      to="/Skills"
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      onSetActive={handleSetActive}
    >
      Test 1
    </Link> */}
    </li>
            <li className='pl-4'>Skills</li>
            <li className='pl-4'><a href="/Work">About</a></li>
            <li className='pl-4'>Work</li>
            <li className='pl-4'>Contact</li></ul>
        </div>
        <div onClick={handleclick} className='md:hidden z-10'>
            {!nav? <Menu className='text-white'/> :<XCircle /> }
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