import { useState, useCallback , useEffect , useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")
  const PasswordRef = useRef(null)

  let PasswordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[^_{|}~"

      for (let i = 0; i < length; i++) {
        const charIndex = Math.floor(Math.random() * str.length);
        pass += str.charAt(charIndex);
      }
      setpassword(pass)
    }
    ,
    [length, numberAllowed, charAllowed, setpassword],
  )

  const CopyToClipBoard = useCallback(()=>{
    PasswordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{
  PasswordGenerator()
},[length,numberAllowed,charAllowed,PasswordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-pink-800 text-orange-500">
      <h1 className='text-white text-center my-3 mb-5'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-6">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref = {PasswordRef}

        />
        <button
        onClick={CopyToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2 mb-4'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setlength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
