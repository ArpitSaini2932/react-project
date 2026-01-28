import React from 'react'

function Logo({width = "80px"}) {
  return (
    <div className="logo-container  w-24 h-24 mix-blend-multiply"> <img src="/newlogo.png" alt="Logo" width={width} /> </div>
  )
}

export default Logo