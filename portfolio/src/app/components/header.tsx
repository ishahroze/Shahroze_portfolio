"use client"
import React from 'react';
import { HeadInfo } from '../staticdata/data';
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
function Header() {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
  })
  return (
    <div className='flex flex-auto justify-around'>
      {HeadInfo.map((item) => (
        <div key={item.id} >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default Header;
