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
    console.log("App.jsx :: GetCurrentUser :: userData", userData); 
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
  <div className="min-h-screen flex flex-col bg-gray-200 ">
    <Header />

    <main className="flex-1 pt-[70px]">
      <Outlet />
    </main>

    <Footer />
  </div>
) : null

}

export default App
