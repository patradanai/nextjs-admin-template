import React, { FC, useState } from 'react'
import { ArrowDown, ArrowRight } from '@components/icons'
interface IListMenuDropDown {
  icons: React.ReactNode
  name: string
  status: boolean
}

const ListMenuDropDown: FC<IListMenuDropDown> = ({ icons, name, status }) => {
  const [isDropdown, setDropdown] = useState<boolean>(false)

  const handleDropdown = () => {
    setDropdown((val) => !val)
  }
  return (
    <div>
      <li
        className={`flex flex-row items-center group ${status ? 'w-[260px]' : 'w-[78px]'} h-[44px] hover:bg-[#475fd2]`}
      >
        {/* Header Menu */}
        <a className='w-full flex flex-row items-center cursor-pointer px-[27px]' onClick={handleDropdown}>
          <div className='text-[#bcc8ff] group-hover:text-[#ffffff]'>{icons}</div>
          {status ? <div className='text-white text-sm font-extralight ml-2'>{name}</div> : null}
          {status ? (
            <div className='ml-auto'>
              {isDropdown ? (
                <ArrowDown className='w-4 h-4 text-[#bcc8ff]' />
              ) : (
                <ArrowRight className='w-4 h-4 text-[#bcc8ff]' />
              )}
            </div>
          ) : null}
        </a>
        {/* List Dropdown */}
        <div className={`${isDropdown ? '' : ''}`}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </li>
    </div>
  )
}

export default ListMenuDropDown
