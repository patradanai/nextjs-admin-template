import { NextPage } from 'next'
import { ViewList } from '@components/icons'
import React, { useState } from 'react'
import { Calendar, Duplicate, ClipBoard, Graph, Chat, Document, Gift, Download, Setting } from '@components/icons'
import { ListMenu } from './components/list-menu'

export const Sidebar: NextPage = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen((val) => !val)
  }

  return (
    <aside
      onMouseEnter={handleOpen}
      onMouseLeave={handleOpen}
      className={`fixed inset-0 h-full overflow-y-auto motion-reduce:transition-none transition-all ease-in-out delay-150 bg-primary ${
        isOpen ? 'w-[260px]' : 'w-[66px]'
      }`}
    >
      <div className='overflow-hidden'>
        {/* Header Company */}
        <div className='py-2 flex flex-row justify-between'>
          <div>
            <a className='cursor-pointer'>asdasdas</a>
          </div>
          <div>
            <ViewList className='w-8 h-8 text-white' />
          </div>
        </div>

        {/* List */}
        <ul className='space-y-3'>
          <ListMenu icons={<Graph className='w-6 h-6 text-white' />} name='สถิติการใช้งาน' status={isOpen} />
          <ListMenu icons={<Calendar className='w-6 h-6 text-white' />} name='สถิติการใช้งาน' status={isOpen} />
          <ListMenu icons={<Duplicate className='w-6 h-6 text-white' />} name='สถิติการใช้งาน' status={isOpen} />
          <ListMenu icons={<ClipBoard className='w-6 h-6 text-white' />} name='สถิติการใช้งาน' status={isOpen} />

          <li>SETTINGS</li>
          <ListMenu icons={<Setting className='w-6 h-6 text-white' />} name='สถิติการใช้งาน' status={isOpen} />
          <ListMenu icons={<Gift className='w-6 h-6 text-white' />} name='สถิติการใช้งาน' status={isOpen} />
          
          <li>DOCUMENTS</li>
          <ListMenu icons={<Chat className='w-6 h-6 text-white' />} name='สถิติการใช้งาน' status={isOpen} />
          <ListMenu icons={<Document className='w-6 h-6 text-white' />} name='สถิติการใช้งาน' status={isOpen} />
          <ListMenu icons={<Download className='w-6 h-6 text-white' />} name='สถิติการใช้งาน' status={isOpen} />
          <ListMenu icons={<Download className='w-6 h-6 text-white' />} name='สถิติการใช้งาน' status={isOpen} />
        </ul>
      </div>
    </aside>
  )
}
