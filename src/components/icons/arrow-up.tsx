import React from 'react'

interface IArrowUp {
  className?: string
}

export const ArrowUp: React.FC<IArrowUp> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <polyline points='18 15 12 9 6 15'></polyline>
    </svg>
  )
}

ArrowUp.defaultProps = {
  className: 'feather feather-chevron-up w-4 h-4'
}
