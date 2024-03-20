import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Import } from 'lucide-react'
import Link from 'next/link'

function Homes() {
  return (
    
    <div className='grid sm:grid-cols-2 grid-cols-1 w-full min-h-fit  bg-slate-800'>
    <div className=' ml-0 pb-5 sm:pl-0 sm:pt-48 pt-5 justify-center flex flex-col items-center  sm:order-2 order-2 bg-slate-800 sm:items-start sm:justify-items-start '>
      
      
      <p className='text-white text-3xl'>Hi , my Name is</p>
      <h1 className='text-3xl decoration-yellow-900 sm:text-7xl sm:mt-4 sm:mb-4  font-bold animate-infinite animate-jump
       text-yellow-600'>Rao Shahroze Ali</h1>
      <h2 className='text-4xl sm:7xl font-bold text-yellow-300'>I'm Web Developer</h2>
      <p className='text-white text-1xl mt-3 sm:text-justify text-center ml-14 sm:ml-0 mr-14'>A tech enthusiast flourishing expertise in Computer Science. I work on multiple technologies including  React, Next.Js, Tailwind CSS,
       Chakra UI. Playing with tech & evolving with time is my motto for technology. I,m in learning phase of backend .</p>
      <Link href={"/CV.png"}><Button className='hover:bg-yellow-300 mt-6 hover:text-black '>Download CV</Button></Link>
    </div>
    <div className='flex sm:justify-end justify-center sm:items-end items-center sm:justify-items-end
    justify-items-center pt-8 sm:order-1 order-1 sm:mr-48'>
 <div className="avatar">
  <div className=" rounded-full mt-12 ring ring-primary ring-offset-base-100  ring-offset-2">
    <img src="/portfolio11.png" className='' />
  </div>
</div>
    </div>
    
    </div>
  )
}

export default Homes