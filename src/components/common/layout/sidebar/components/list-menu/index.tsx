import React, { FC } from 'react'

interface IListMenu {
  icons: React.ReactNode
  name: string
  status: boolean
}

export const ListMenu: FC<IListMenu> = ({ icons, name, status }) => {
  return (
    <li className={`${status ? 'w-[260px]' : 'w-[78px]'} h-[44px]`}>
      <a className='flex flex-row items-center cursor-pointer space-x-2 px-[27px]'>
        <div className='flex justify-center'>{icons}</div>
        {status ? <span className='text-white text-sm font-extralight'>{name}</span> : null}
      </a>
    </li>
  )
}
