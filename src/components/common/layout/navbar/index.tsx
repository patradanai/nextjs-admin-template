import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'

export const Navbar: NextPage = () => {
  return (
    <nav className='fixed top-0 right-0 flex left-[68px] flex-row justify-between items-center bg-white h-[75px]  border-b-[1px]'>
      {/* Agent Name */}
      <div className='h-10 ml-6 p-3 bg-[#f0f3ff] text-primary  text-sm rounded'>DooDeeConstruction</div>

      {/* User Info */}
      <div className='mr-6 h-14 ml-auto text-sm flex flex-row items-center hover:bg-[#f0f3ff] rounded-full py-2 pl-2 cursor-pointer'>
        <p className='text-xs text-[#959cb6]'>Hi, </p>
        <p className='indent-1 text-[#6c7293]'>ภัทรดนัย</p>
        <div className='relative m-2 w-10 h-10'>
          <Image src='/images/default.jpeg' alt='userinfo' className='rounded-full' layout='fill' />
        </div>
      </div>
    </nav>
  )
}
