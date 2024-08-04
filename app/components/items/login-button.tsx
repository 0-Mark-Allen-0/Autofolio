import React from 'react'
import Link from 'next/link'

const LoginButton = () => {
  return (
    <div>
      <Link href='/login'>
        <button 
        className='w-fit h-fit p-2 bg-neutral-800 text-white/90 rounded-[20px] 
                hover:text-white border-solid border-2 border-orange-500 
                hover:bg-orange-500 font-medium
                transition ease-in-out delay-60'
        >
          Login
        </button>
      </Link>
    </div>
  )
}

export default LoginButton
