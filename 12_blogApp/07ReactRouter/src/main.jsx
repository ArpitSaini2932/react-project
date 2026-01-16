import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom';
import Layout from "./layout.jsx"
import Home from './component/home/home.jsx'
import About from './component/about us/aboutUs.jsx'
import Contact from './component/contact/contact.jsx'
import User from './component/User/User.jsx'
import Github , {GithubLoader} from './component/Github/Github.jsx'


const routers = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/home" element={<Home />}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Contact" element={<Contact />}/>
    <Route path="/User/:userId" element={<User />}/>
    <Route 
    loader = {GithubLoader}
     path="/Github"
      element={<Github />}/>
  
  </Route>
)
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
