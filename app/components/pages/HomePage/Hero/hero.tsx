import React from 'react'
import Image from 'next/image'
import garage from "./new.jpg"
import LearnButton from '../../../items/learn-button'
const Hero = () => {
  return (
    <div className='flex items-center'>
      <div className='w-full flex flex-row-reverse items-center'>
        <div className='w-[65%] p-4'>
          <div className='rounded-[20px] overflow-hidden'>
            <Image
              className='w-full h-auto'
              src={garage}
              alt='hero'
              />
          </div>
        </div>
          
        <div className='w-[30%] pr-8 pl-4 mr-10'>
          <h1 className='text-black font-semibold text-[65px] float-left'>Welcome To <span className='text-[100px] bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500'>autofolio.</span></h1>
          <h2 className='text-[18px] font-medium'>The comprehensive tool to maintain and track vehicle history and data</h2>
          <div className='pt-8'>
            <LearnButton />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
