'use client'
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
function Form() {
  async function handleSubmit(event:any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("dca23b64-b906-4926-b2b1-601e18b97d4b", "dca23b64-b906-4926-b2b1-601e18b97d4b");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <div className='flex mx-28 m-10'>
        <div className='bg-teal-900 basis-1/2'>
          <Image
            src={"/contact.png"}
            alt='contact'
            width={500}
            height={50}
            className='w-full mx-auto'
          />
        </div>
        <div className='basis-1/2 w-full bg-teal-900'>
          <form className='flex justify-center justify-items-center align-middle flex-col gap-6 mt-5 p-6 text-white items-center w-96' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className='text-black font-extrabold text-3xl '>Name</label><br />
              <input type="text" name="name" required minLength={5} maxLength={15} autoComplete='off' className='text-black rounded-md' id='name'/>
            </div>
            <div>
              <label htmlFor="mail"  className='text-black font-extrabold text-3xl '>Mail</label><br />
              <input type="email" name="email" required minLength={5} maxLength={15} autoComplete='off' className='text-black rounded-md' id='mail'/>
            </div>
            <div>
              <textarea
                rows={4}
                placeholder='Send Me your concerns'
                className='w-full rounded-sm'
                maxLength={1000}
                name="message"
              />
            </div>
            
            <Button type="submit" className='bg-black'>Submit Form</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form;
