import React, { useState } from 'react'
import { ArrowUp, ArrowDown, Cancel } from '@components/icons'

interface IInputSelection {
  datas: string[]
  value: string
}

export const InputSelectionWithSearch: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [heightInput, setHeightInput] = useState<string>('')

  const handleOpen = () => {
    setOpen((val) => !val)
  }

  return (
    <div className={`w-[220px] rounded ${isOpen ? 'h-auto shadow-lg ring-1' : 'h-[40px]'} overflow-hidden bg-white`}>
      <div className='flex flex-wrap h-full border border-gray rounded'>
        <div id='selection' className='w-full'>
          {/* Show */}
          <div className='flex flex-row items-center w-full h-[40px] box-border p-2'>
            <div className='w-full px-2 text-[#999] text-xs font-extralight'>JavaScript</div>
            <button className='cursor-pointer flex items-center justify-center w-10 h-10'>
              <Cancel />
            </button>
            <button className='cursor-pointer flex items-center justify-center w-10 h-10' onClick={handleOpen}>
              {isOpen ? <ArrowUp /> : <ArrowDown className='feather feather-chevron-up w-4 h-4' />}
            </button>
          </div>
          {/* Search Input */}
          <div className='p-2'>
            <input
              type='text'
              id='search'
              name='search'
              className='w-full h-[31px] appearance-none outline-none border border-[#c2cad8] text-sm text-[#555] rounded px-2'
            />
          </div>
        </div>
        {/* List */}
        <ul className='w-[220px]'>
          <li className='flex items-center px-2 h-[40px] text-sm font-extralight text-gray-dark hover:bg-info hover:text-white'>
            งานเคลม
          </li>
        </ul>
      </div>
    </div>
  )
}
