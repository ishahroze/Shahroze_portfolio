import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Import } from 'lucide-react'
import Link from 'next/link'

function Homes() {
  return (
    
    <div className='grid sm:grid-cols-2 grid-cols-1 w-full min-h-fit  bg-slate-800'>
    <div className=' ml-0 pb-5 sm:pl-0 sm:pt-48 pt-5 justify-center flex flex-col items-center  sm:order-2 order-2 bg-slate-800 sm:items-start sm:justify-items-start '>
      
      
      <p className='text-white'>Hi , my Name is</p>
      <h1 className='text-4xl sm:7xl font-bold text-yellow-600'>Rao Shahroze Ali</h1>
      <h2 className='text-4xl sm:7xl font-bold text-yellow-300'>I'm Web Developer</h2>
      <Link href={"/CV.png"}><Button className='hover:bg-yellow-300 mt-6 hover:text-black '>Download CV</Button></Link>
    </div>
    <div className='flex sm:justify-end justify-center sm:items-end items-center sm:justify-items-end
    justify-items-center pt-8 sm:order-1 order-1 sm:mr-24'>
    <Image
    src={"/Portfolio1.png"}
    alt='Myself'
    width={200}
    height={200}
    className='rounded-full  w-2/6 h-4/6 border border-yellow-900 border-double '
    />
    </div>
    
    </div>
  )
}

export default Homes