import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';


const Footer = () => {
  return (
    <div>
      <div className='bg-zinc-800 text-white/70 text-[15px]  
                        w-full h-fit grid grid-cols-3 grid-rows-2'>

        <div className='col-start-1 col-span-1 row-start-1'></div> {/*Empty div to occupy the first col */}
        
        <div className='col-start-2 col-span-1 row-start-1 pt-10'>
          <h1 className='text-center italic'>
            AUTOFOLIO© 2024, all rights reserved
          </h1>
        </div>

        <div className='col-start-3 col-span-1 row-start-1'></div> {/*Empty div to occupy the third col */}

        <div className='col-start-1 col-span-1 row-start-2 pl-10 pt-3 pb-3 pr-3'>
            <h1 className='italic pb-2'>
                CONTACT 
            </h1>
            <ul className='text-[13px]'>
                <li className='pb-2'>
                    <div className='flex gap-2'>
                        <IoMailOpenOutline size={20}/>
                        allenmark2005@gmail.com
                    </div>
                </li>

                
                <li className='pb-2'>
                    <div className='flex gap-2'>
                        <FaGithub size={20} />
                        <a href='https://github.com/0-Mark-Allen-0'>0-Mark-Allen-0</a>
                    </div>
                </li>

                
                <li className='pb-2'>
                    <div className='flex gap-2'>
                        <FaLinkedin size={20}/>
                        <a href='https://www.linkedin.com/in/mark-allen-08b965286/'>Mark Allen</a>
                    </div>
                </li>
            </ul>
        </div>
        
        <div className='col-start-2 col-span-1 row-start-1'></div> {/*Empty div to occupy the third col */}

        <div className='col-start-3 col-span-1 row-start-2 pr-10'>
            <h1 className='italic pb-2 text-right'>
                PAGE LINKS 
            </h1>
            <ul className='text-[13px] text-center'>
                <Link href="/home">
                    <li className='pb-2'>
                        <div className='flex gap-2 justify-end'>
                            Home
                        </div>
                    </li>
                </Link>

                
                <li className='pb-2'>
                    <div className='flex gap-2 justify-end'>
                       Blog
                    </div>
                </li>

                <Link href='/login'>
                    <li className='pb-2'>
                        <div className='flex gap-2 justify-end'>
                            Login
                        </div>
                    </li>
                </Link>
            </ul>
            
        </div>
        
      </div>
    </div>
  )
}

export default Footer