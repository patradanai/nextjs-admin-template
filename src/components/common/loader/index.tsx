import React from 'react'

export const Loader = () => {
  return (
    <div className='fixed top-1/2 left-1/2'>
      <div className='h-[40px] bg-white px-10 flex items-center justify-center rounded-md'>
        <p className='text-[#999] text-sm'>Please loading...</p>
        <span className='ml-5 animate-spin border-4 border-[#c2c0c0] border-b-primary w-6 h-6 rounded-full'></span>
      </div>
    </div>
  )
}

export default Loader
