import React, { FC } from 'react'

interface IListMenu {
  icons: React.ReactNode
  name: string
  status: boolean
}

const ListMenu: FC<IListMenu> = ({ icons, name, status }) => {
  return (
    <li className={`flex flex-row items-center group ${status ? 'w-[260px]' : 'w-[78px]'} h-[44px] hover:bg-[#475fd2]`}>
      <a className='flex flex-row items-center cursor-pointer space-x-2 px-[27px]'>
        <div className='text-[#bcc8ff] group-hover:text-[#ffffff]'>{icons}</div>
        {status ? <span className='text-white text-sm font-extralight'>{name}</span> : null}
      </a>
    </li>
  )
}

export default ListMenu