import React from 'react'
import { Button } from "@/components/ui/button"
function Homes() {
  return (
    <div className='w-full min-h-full pl-6 pt-20 sm:pl-48 sm:pt-48 bg-slate-800 '>
      
      
      <p className='text-white'>Hi , my Name is</p>
      <h1 className='text-4xl sm:7xl font-bold text-yellow-600'>Rao Shahroze Ali</h1>
      <h2 className='text-4xl sm:7xl font-bold text-yellow-300'>I'm Front End Developer</h2>
      <Button className='hover:bg-yellow-300 mt-6 hover:text-black '>Download CV</Button>
    </div>
  )
}

export default Homes