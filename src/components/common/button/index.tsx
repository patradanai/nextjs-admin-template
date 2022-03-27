import React from 'react'
import classnames from 'classnames'

interface IButton {
  OuterClassName?: string
  className?: string
  icon?: React.ReactNode
  name?: string
}

export const Button: React.FC<IButton> = ({ className, OuterClassName, name, icon }) => {
  return (
    <div className={classnames({ [`p-2 min-w-[32px]`]: !OuterClassName }, OuterClassName)}>
      <button className={classnames(className, 'w-full h-full')}>
        <span>{icon}</span>
        {name}
      </button>
    </div>
  )
}

Button.defaultProps = {
  name: '',
  className:
    'px-3 py-1 text-sm transition-colors duration-300 text-primary rounded bg-white border border-primary hover:text-white hover:bg-primary'
}
