import React from 'react'

interface INavbarListMenu {
  isOpen: boolean
  componentLeft?: React.ReactNode
  componentRight?: React.ReactNode
}

export const NavbarListMenu: React.FC<INavbarListMenu> = ({ isOpen, componentLeft, componentRight }) => {
  return (
    <nav className={`sticky w-full left-0 right-0 top-[75px] bg-white h-[54px]`}>
      <div className='h-full flex flex-row justify-between items-center bg-white border-b-[1px] border-b-secondary px-6'>
        {/* Agent Name */}
        <div className='h-10 ml-6 p-3 bg-[#f0f3ff] text-primary  text-sm rounded'>1</div>

        {/* User Info */}
        <div className='h-10 mr-6 p-3 bg-[#f0f3ff] text-primary  text-sm rounded'>2</div>
      </div>
    </nav>
  )
}
