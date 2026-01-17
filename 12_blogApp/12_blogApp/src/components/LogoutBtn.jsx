import React from 'react'
import {useDispatch} from "react-redux"
import authservice from "../appwrite/auth"
import {logout} from "../store/authSlice"
function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler =()=>{
    authservice.logout().then(()=> 
    dispatch(logout())
  ).catch((err)=> {return err})
}
  return (
<button onClick={logoutHandler} 
className='inline-block px-6 py-3 duration-200 lover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn