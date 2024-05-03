
import React from 'react'
import Form from './Form'
const Contact = () => {
  return (
    <div  className='w-full bg-slate-800 min-h-screen '>
       <div className="flex flex-col pt-6 w-full h-full  items-center   ">
        <div>
          <p className="text-4xl text-white font-bold inline-flex text-center justify-center border-b-4 border-pink-600">
            CONTACT
          </p>
        </div>
      </div>
      
    <Form/>
    </div>
  )
}

export default Contact