import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
let Arr = {
  username : "vishu"
}
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Vishu</h1>
     <br />
     <Card  name="vishu" />
     <Card  name="Arpit" />
    
    </>
  )
}

export default App
