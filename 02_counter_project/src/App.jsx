import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const AddValue = ()=>{
    setCounter(counter + 1)
  }


  const RemoveValue = ()=>{
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Vishu</h1>
      <h2>Counter : {counter}</h2>
      <button
      onClick={AddValue}
      >Add Counter Value</button>

      <br /> 

      <button
      onClick={RemoveValue}
      >remove Counter Value</button>
    </>
  )
}

export default App
