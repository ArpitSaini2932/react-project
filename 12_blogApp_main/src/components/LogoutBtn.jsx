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
className='inline-block px-4 py-2 cursor-pointer hover:shadow-2xl duration-500 bg-black text-white hover:text-black  hover:bg-blue-100 hover:scale-[1.06] rounded-full'>Logout</button>
  )
}

export default LogoutBtn