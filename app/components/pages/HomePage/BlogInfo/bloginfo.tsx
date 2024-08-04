"use client"

import React from 'react'
import blogImage from "./blogdisplay.png"
import Image from 'next/image'
import LearnButton from '@/app/components/items/learn-button'

const BlogInfo = () => {
  return (
    <div className='w-full mt-[50px]'>
        <div className="flex flex-row items-center pt-10 pb-10 pl-5 pr-5">
        <div className="w-1/2 p-4">
            <div className='rounded-[20px] overflow-hidden'>
                <Image
                src={blogImage}
                alt='geneva-motor-show'
                className="w-full h-auto"
                />
            </div>
        </div>

        <div className="w-1/2 pl-10">
            <h1 className='font-semibold text-[65px] 
                        bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500'>
            The Blog
            </h1>

            <h2 className="text-lg mb-4">Updated weekly, our very own blog serves as a channel to express our opinions</h2>
            <h2 className="text-lg">Check out the page to go on a deep dive into the latest automotive news!</h2>
            <div className='pt-5 pb-5'>
                <LearnButton />
            </div>
        </div>
        </div>

    </div>
  )
}

export default BlogInfo