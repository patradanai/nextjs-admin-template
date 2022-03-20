import React from 'react'
import { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { sidebarState } from '@stores/sidebar'
import { ViewList } from '@components/icons'
import { Calendar, Duplicate, ClipBoard, Graph, Chat, Document, Gift, Download, Setting } from '@components/icons'
import ListMenu from './components/list-menu'
import ListMenuDropDown from './components/list-menu-dropdown'

export const Sidebar: NextPage = () => {
  const [isOpen, setOpen] = useRecoilState(sidebarState)

  const handleOpen = () => {
    // Work if isLock is False
    !isOpen.isLock && setOpen((val) => ({ ...val, sidebar: !val.sidebar }))
  }

  const handleLock = () => {
    // Lock Sidebar
    setOpen((val) => ({ ...val, isLock: !val.isLock }))
  }

  return (
    <aside
      onMouseEnter={handleOpen}
      onMouseLeave={handleOpen}
      className={`fixed inset-0 h-full motion-reduce:transition-none transition-all ease-in-out delay-150 bg-primary ${
        isOpen.isLock || isOpen.sidebar
          ? 'w-[260px] overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-info scrollbar-thumb-rounded-full'
          : 'w-[78px]'
      }`}
    >
      <div className='overflow-hidden'>
        {/* Header Company */}
        <div className='px-[25px] h-[78px] flex flex-row items-center justify-between'>
          {isOpen.sidebar ? (
            <div>
              <a className='cursor-pointer'>asdasdas</a>
            </div>
          ) : null}
          <div className='cursor-pointer' onClick={handleLock}>
            <ViewList className='w-8 h-8 text-white' />
          </div>
        </div>

        {/* List */}
        <div className='my-5'>
          <ul>
            <ListMenu icons={<Graph className='w-6 h-6' />} name='สถิติการใช้งาน' status={isOpen.sidebar} />
            <ListMenu icons={<Calendar className='w-6 h-6' />} name='สถิติการใช้งาน' status={isOpen.sidebar} />
            <ListMenu icons={<Duplicate className='w-6 h-6' />} name='สถิติการใช้งาน' status={isOpen.sidebar} />
            <ListMenu icons={<ClipBoard className='w-6 h-6' />} name='สถิติการใช้งาน' status={isOpen.sidebar} />
            <ListMenuDropDown icons={<ClipBoard className='w-6 h-6' />} name='สถิติการใช้งาน' status={isOpen.sidebar} />

            <li className='px-[27px] h-[44px] text-[#bcc8ff] mt-5'>
              {isOpen.sidebar ? (
                <p className='text-sm'>SETTINGS</p>
              ) : (
                <p className='tracking-[0.1em] text-center animate-fade'>...</p>
              )}
            </li>
            <ListMenu icons={<Setting className='w-6 h-6' />} name='สถิติการใช้งาน' status={isOpen.sidebar} />
            <ListMenu icons={<Gift className='w-6 h-6' />} name='สถิติการใช้งาน' status={isOpen.sidebar} />

            <li className='px-[27px] h-[44px] text-[#bcc8ff] mt-5'>
              {isOpen.sidebar ? (
                <p className='text-sm'>DOCUMENTS</p>
              ) : (
                <p className='tracking-[0.1em] animate-fade text-center'>...</p>
              )}
            </li>
            <ListMenu icons={<Chat className='w-6 h-6' />} name='สถิติการใช้งาน' status={isOpen.sidebar} />
            <ListMenu icons={<Document className='w-6 h-6' />} name='สถิติการใช้งาน' status={isOpen.sidebar} />
            <ListMenu icons={<Download className='w-6 h-6' />} name='สถิติการใช้งาน' status={isOpen.sidebar} />
            <ListMenu icons={<Download className='w-6 h-6' />} name='สถิติการใช้งาน' status={isOpen.sidebar} />
          </ul>
        </div>
      </div>
    </aside>
  )
}
