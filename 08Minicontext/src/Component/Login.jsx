import React , {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)

    const HandleSubmit = (e)=>{
        e.preventDefault()
        setUser({Username,Password})
    }
  return (
    <div>
        <input type="text"
        value={Username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Username' />

        <input type="text"
        value={Password}
        onChange={(e)=>setPassword(e.target.value)}
         placeholder='Password' />
        
        <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login