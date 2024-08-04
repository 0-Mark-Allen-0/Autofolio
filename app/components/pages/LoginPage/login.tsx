"use client"

import Link from 'next/link';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut, useSession } from 'next-auth/react'

import SigninButton from '../../items/signin-button'

const Login = () => {

  const {data:session} = useSession();

  if(session && session.user){

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-[20px] md:flex-row md:space-y-6'>
        <div className='flex flex-col justify-center p-8 md:p-14'>
          <span className='mb-3 text-4xl font-bold'>Welcome {session.user.name}!</span>
          <span className='text-gray-400 mb-8 font-light'>Click on the button below to sign out</span>
            <div>
            <button
            onClick={() => signOut()} 
            className='flex gap-2 p-4
                               text-[16px]
                               border-slate-800 border-solid border-2 rounded-[20px]
                               hover:bg-slate-800 hover:text-white
                               transition ease-in-out delay-60'>
              <FcGoogle size={25}/> Sign Out
            </button>
            <Link href="/home">
              <p className='pt-6 font-light text-gray-400 hover:text-gray-700 transition ease-in-out delay-60'>
                Return to Home
              </p>
            </Link>
          </div>
        </div>
        <div className='relative'>
        </div>
        
      </div>
    </div>
  )
  }

  return(
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
    <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-[20px] md:flex-row md:space-y-6'>
      <div className='flex flex-col justify-center p-8 md:p-14'>
        <span className='mb-3 text-4xl font-bold'>Welcome!</span>
        <span className='text-gray-400 mb-8 font-light'>Click on the button below to sign in with Google</span>
          <div>
          <button
          onClick={() => signIn()} 
          className='flex gap-2 p-4
                             text-[16px]
                             border-slate-800 border-solid border-2 rounded-[20px]
                             hover:bg-slate-800 hover:text-white
                             transition ease-in-out delay-60'>
            <FcGoogle size={25}/> Sign In With Google
          </button> 
        </div>
        <Link href="/home">
            <p className='pt-6 font-light text-gray-400 hover:text-gray-700 transition ease-in-out delay-60'>
              Return to Home
            </p>
          </Link>
      </div>
      <div className='relative'>
      </div>
      
    </div>
  </div>

  )
}

export default Login