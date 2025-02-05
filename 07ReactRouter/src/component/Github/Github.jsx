import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
    // const [data,setData] = useState({})
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/ArpitSaini2932")
    //     .then(res => res.json())
    //     .then((data) =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='flex justify-center align-middle m-3'>
    <div  className= ' w-2/4 text-xl text-center font-semibold m-3 p-3'>Public Repository : {data.public_repos}
    
<div className='flex m-3 justify-center align-middle ' ><img className='w-52  ' src={data.avatar_url} alt="" />
</div>
</div>
</div>
  )
}

export default Github

export const GithubLoader= async ()=> {
  const request = await fetch("https://api.github.com/users/ArpitSaini2932")
  return request.json() 
}