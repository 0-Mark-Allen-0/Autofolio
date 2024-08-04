"use client";

import { FcGoogle } from "react-icons/fc";
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const SigninButton = () => {
    
    const {data:session} = useSession();

    if(session && session.user){
        return (
            <div>
                <p >{session.user.name}</p>

                <button 
                onClick={() => signOut()}
                className='flex gap-2 p-4
                            text-[16px]
                            border-slate-800 border-solid border-2 rounded-[20px]
                            hover:bg-slate-800 hover:text-white
                            transition ease-in-out delay-60'
                >
                <FcGoogle size={25}/> Sign In With Google
                </button>
            </div>
        )
    }

    return (
    <div>
      <button 
            onClick={() => signIn()}
            className='w-fit h-fit p-2 bg-neutral-800 text-white/90 rounded-[20px] 
                        hover:text-white border-solid border-2 border-orange-500 
                        hover:bg-orange-500 font-medium
                        transition ease-in-out delay-60'
            >
            Sign In
        </button>
    </div>
  )
}

export default SigninButton
