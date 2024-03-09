import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Skills() {
  return (
    <div className='w-full h-full   bg-slate-800 text-white'>
<div  className='flex flex-col  w-full h-full justify-center items-center  '>
      <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 py-8'>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'>
                <Image
                src={"/skill2.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center'>HTML</p>
            </div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill1.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center '>CSS</p></div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill3.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center'>Java Script</p></div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill6.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center'>Tailwind</p></div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill5.png"}
                alt='skill1'
                width={200}
                height={200}
                
                />
                <p className='my-4 text-center'>Node Js</p></div>
            <div className='shadow-md shadow-slate-900 hover:scale-110 duration-500 pt-4'><Image
                src={"/skill4.png"}
                alt='skill1'
                width={200}
                height={200}
                />
                <p className='my-4 text-center'>REACT</p></div>

        </div>
    </div>

    </div>
  )
}

export default Skills