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
      <li className={`flex flex-col group items-center ${status ? 'w-[260px]' : 'w-[78px]'} `}>
        {/* Header Menu */}
        <a
          className='w-full h-[44px] flex flex-row items-center cursor-pointer px-[27px] hover:bg-[#475fd2]'
          onClick={handleDropdown}
        >
          <div className='text-[#bcc8ff] hover:text-[#ffffff]'>{icons}</div>
          {status ? (
            <>
              <div className='text-[#bcc8ff] text-sm font-extralight ml-2 group-hover:text-[#ffffff]'>{name}</div>
              <div className='ml-auto'>
                {isDropdown ? (
                  <ArrowDown className='w-4 h-4 text-[#bcc8ff]' />
                ) : (
                  <ArrowRight className='w-4 h-4 text-[#bcc8ff]' />
                )}
              </div>
            </>
          ) : null}
        </a>
      </li>
      {/* List Dropdown */}
      {status ? (
        <div
          className={`w-full group overflow-hidden transition-all ease-in-out duration-300 ${
            isDropdown ? 'max-h-[200px]' : 'max-h-0'
          }`}
        >
          <ul>
            <li
              className={`before:content-['-'] before:mx-3 text-[#bcc8ff] h-[44px] px-[27px] flex items-center group-hover:bg-[#475fd2]`}
            >
              <a className='text-[#bcc8ff] group-hover:text-[#ffffff]'>1</a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default ListMenuDropDown
