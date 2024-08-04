"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GoStack } from "react-icons/go";




const cardData = [
  {identifier: 1, title: "Easy To Use", content:"Autofolio has been designed with simplicity and minimalism in mind. Aesthetic and easy-to-read graphs and UI make dealing with numbers and data that much easier."},
  {identifier: 2, title: "It's Free", content:"Autofolio is absolutely free of cost, for a garage of one car and one motorcycle. If you wish to extend our services to more vehicles, our affordable plans make it hassle free"},
  {identifier: 3, title: "Resourceful", content:"From fuel economy to maintenance records, Autofolio acts as an extensive vehicle portfolio which aids in resale and satisfies the number nerd in you"}
]

const Information = () => {
  return (
    <div className='pt-10 pb-32 bg-gradient-to-r from-red-500 to-orange-500 w-full h-[90vh]'>
      <h1 className='text-[65px] font-semibold text-center pb-5 pt-5
                     text-white'>
        Features.
      </h1>
      
      <div className='flex justify-center gap-20 mt-[50px]'>
        {cardData.map(data => (
          <div>
            <div>
              <Card className='rounded-[20px] w-96 h-60 shadow-lg  
                              border-transparent'>
                  <CardHeader className='flex flex-row items-center space-x-2'>
                    <div className='flex-shrink-0 mt-2 pr-1'>
                      {data.identifier === 1 ? (<HiOutlineComputerDesktop size={25}/>) : data.identifier === 2 ? (<FaIndianRupeeSign size={25}/>) : (<GoStack size={25}/>)}
                    </div>
                      <CardTitle>{data.title}</CardTitle>
                  </CardHeader>
                  <CardContent className='font-medium'>
                      <p>{data.content}</p>
                  </CardContent>
              </Card>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  )
}

export default Information
