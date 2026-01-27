import React from 'react'

function Button({
    children,
    bgColor = "bg-blue-600",
    textColor = "text-white",
    type = 'button',
    className ="",
    ...props
}) {
  return (
    <button
    className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props  }>{children}</button>
  )
}

export default Button