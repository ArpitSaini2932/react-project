import React from 'react'
import service from '../appwrite/configuration'
import {Link } from "react-router-dom"


function PostCard({$id , featuredImg, title}) {
  return (
    <Link to={`//post/{$id}`}>
      <div className='w-full rounded-lg bg-gray-100 p-4'>
        <div className='w-full justify-center mb-4'>
          <img className='rounded-xl ' src={service.GetFilePreview(featuredImg)} alt="{title}" />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>  
  )
}

export default PostCard