import React from 'react'
import { NextPage } from 'next'
import { Sidebar } from './sidebar'
import { Navbar } from './navbar'
import { Footer } from './footer'

export const Container: NextPage = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-screen justify-between bg-[#F2F3F8] box-border'>
      <Navbar />
      <div className='flex flex-row mb-auto h-full'>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  )
}
