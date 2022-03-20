import { atom } from 'recoil'

export const sidebarState = atom({
  key: 'sidebarState',
  default: {
    sidebar: false,
    isLock: false
  }
})
