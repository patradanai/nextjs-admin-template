import React, { FC } from 'react'

interface IListMenu {
  icons: React.ReactNode
  name: string
  status: boolean
}

export const ListMenu: FC<IListMenu> = ({ icons, name, status }) => {
  return (
    <li className='w-[260px]'>
      <a className='flex flex-row cursor-pointer space-x-2'>
        <div className='w-[68px] flex justify-center'>{icons}</div>
        {status ? <span>{name}</span> : null}
      </a>
    </li>
  )
}
