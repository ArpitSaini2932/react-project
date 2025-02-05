import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams()
  return (
    <div className='text-center text-xl m-3 font-bold '>User : {userId}</div>
  )
}

export default User