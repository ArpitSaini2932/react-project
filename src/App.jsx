import React , {useState, useEffect} from 'react'
import './App.css'
import authservice from './appwrite/auth'
import {login, logout} from "./store/authSlice"
import {useDispatch} from "react-redux"
import {Footer , Header} from "./components"
import {Outlet} from "react-router-dom"
function App() {

const [Loading , setLoading] = useState(true)
const dispatch = useDispatch()


useEffect(() => {
  authservice.GetCurrentUser()
  .then((userData)=>{
    if (userData) {
      dispatch(login({userData}))
    } else {
      dispatch(logout())
    }
  })
  .catch((err) => {
      console.error("Error in session check", err);
      dispatch(logout());          
    })
  .finally(()=>setLoading(false))
}, [dispatch])

return !Loading ? (
  <div className='min-h-screen flex flex-wrap bg-blue-500 content-between'>
    <div className='w-full block '>
      <Header />
      <main>
        hello
       TODO: <Outlet />
      </main>
      <Footer/>
    </div>
  </div>
  
) : (null)

}

export default App
