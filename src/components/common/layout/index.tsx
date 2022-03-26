import React from 'react'
import { useRecoilValue } from 'recoil'
import { NextPage } from 'next'
import { sidebarState } from '@stores/sidebar'
import { Sidebar } from './sidebar'
import { Navbar } from './navbar'
import { NavbarListMenu } from './navbar-list-menu'
import { Footer } from './footer'

export const Container: NextPage = ({ children }) => {
  const sidebar = useRecoilValue(sidebarState)
  return (
    <div className='flex flex-col w-full h-screen justify-between bg-[#F2F3F8] box-border'>
      <Navbar isOpen={sidebar.isLock} />
      <div className='flex flex-row mb-auto h-full w-full'>
        <Sidebar />
        <div className={`pt-[75px] w-full h-full`}>
          <div
            className={`${
              sidebar.isLock ? 'pl-[260px]' : 'pl-[78px]'
            } transition-all ease-in-out duration-500 w-full h-full`}
          >
            <NavbarListMenu isOpen={sidebar.isLock} componentLeft={<div>WTF</div>} componentRight={<div>MAN</div>} />
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
