import React from 'react'

function Logo({width = "100px"}) {
  return (
    <div className="logo-container w-24 h-24 mix-blend-multiply"> <img src="/logo.jpg" alt="Logo" width={width} /> </div>
  )
}

export default Logo