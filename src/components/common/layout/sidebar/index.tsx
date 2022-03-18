import { NextPage } from 'next'
import React, { useState } from 'react'

export const Sidebar: NextPage = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen((val) => !val)
  }

  return (
    <aside
      onMouseEnter={handleOpen}
      onMouseLeave={handleOpen}
      className={`fixed inset-0 h-full motion-reduce:transition-none transition-all ease-in-out delay-150 bg-primary ${
        isOpen ? 'w-[260px]' : 'w-[68px]'
      }`}
    >
      {/* Header Company */}
      <div>
          <div></div>
          <div></div>
      </div>

      {/* List */}
      {/* <ul>
          <li></li>
          <li></li>
          <li></li>
          <li>SETTINGS</li>
          <li></li>
          <li>DOCUMENTS</li>
      </ul> */}
    </aside>
  )
}
