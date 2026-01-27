import React from 'react'
import {Logo,Container, LogoutBtn} from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'




function Header() {

  const [scrolled, setScrolled] = React.useState(false)

React.useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10)
  }

  window.addEventListener("scroll", handleScroll)
  handleScroll()

  return () => window.removeEventListener("scroll", handleScroll)
}, [])

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
    <div
  className={`py-2 fixed top-0 left-0 w-full z-50 transition-all duration-300
  ${scrolled
    ? "bg-white/50 backdrop-blur-xl shadow-md"
    : "bg-white shadow-none"
  }`}
>

    <Container>
      <nav className='flex justify-center items-center h-16 '>
        <div className=' flex pt-5 z-0 justify-center items-center ' > 
          <Link to="/">
          <Logo/>
          </Link>
          <div className='font-bold pb-5 font-serif text-2xl py-[-10px]'><p>Blog</p></div>
        </div>
        
        <ul className='flex ml-auto justify-center text-[14px] items-center gap-5 '>
          {NavItems.map((item)=>
            item.active ? (
              <li key = {item.name}>
                <button onClick={()=> navigate(item.slug)}
                  className='inline-block px-3 py-2 hover:shadow-2xl duration-500 hover:scale-[1.06] cursor-pointer hover:bg-blue-100 rounded-full'>
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