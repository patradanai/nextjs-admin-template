import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'

interface INavbar {
  isOpen: boolean
}

export const Navbar: NextPage<INavbar> = ({ isOpen }) => {
  return (
    <nav className={`fixed inset-0 ${isOpen ? 'pl-[260px]' : 'pl-[78px]'} transition-all ease-in-out duration-500`}>
      <div className='flex flex-row justify-between items-center bg-white h-[75px]  border-b-[1px] border-b-secondary'>
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
      </div>
    </nav>
  )
}
