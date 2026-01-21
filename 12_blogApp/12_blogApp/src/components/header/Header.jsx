import React from 'react'
import {Logo,Container, LogoutBtn} from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus  = useSelector((state)=> state.auth.status )
  const navigate = useNavigate()

  const NavItems = [
    {
      name : "Home"   ,
      slug : "/",
      active : true
    },
    {
      name : "Login" ,
      slug : "/login",
      active : !authStatus
    },
    {
      name : "Signup " ,
      slug : "/signup",
      active : !authStatus
    },
    {
      name : "All Posts" ,
      slug :"/all-posts",
      active : authStatus
    },
    {
      name : "Add Posts" ,
      slug : "/add-posts",
      active : authStatus
    },
  ]
  return (
    <div className='py-3 shadow shadow-2xl rounded rounded-b-2xl bg-white'>
    <Container>
      <nav className='flex justify-center items-center h-16 '>
        <div className='mr-4 flex justify-center items-center' > 
          <Link to="/">
          <Logo/>
          </Link>
          <div className='font-bold font-serif text-2xl'><p>Blog</p></div>
        </div>
        
        <ul className='flex ml-auto justify-center items-center gap-4 '>
          {NavItems.map((item)=>
            item.active ? (
              <li key = {item.name}>
                <button onClick={()=> navigate(item.slug)}
                  className='inline-block px-3 py-2  duration-500 hover:scale-[1.06] hover:bg-blue-100 rounded-full'>
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn/>
            </li>
          )}
        </ul>
      </nav>
    </Container>
    </div>
  )
}

export default Header