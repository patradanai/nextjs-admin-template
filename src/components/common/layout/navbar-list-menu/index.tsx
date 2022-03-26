import React from 'react'

interface INavbarListMenu {
  isOpen: boolean
  componentLeft?: React.ReactNode
  componentRight?: React.ReactNode
}

export const NavbarListMenu: React.FC<INavbarListMenu> = ({ isOpen, componentLeft, componentRight }) => {
  return (
    <nav className={`fixed w-full inset-y-[75px] bg-white h-[54px]`}>
      <div className='flex flex-row justify-between items-center bg-white h-[75px]  border-b-[1px] border-b-secondary'>
        {/* Agent Name */}
        <div className='h-10 ml-6 p-3 bg-[#f0f3ff] text-primary  text-sm rounded'></div>

        {/* User Info */}
        <div className='mr-6 h-14 ml-auto text-sm flex flex-row items-center hover:bg-[#f0f3ff] rounded-full py-2 pl-2 cursor-pointer'></div>
      </div>
    </nav>
  )
}
