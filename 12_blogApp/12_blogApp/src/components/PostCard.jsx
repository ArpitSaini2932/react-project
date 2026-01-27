import React from "react"
import service from "../appwrite/configuration"
import { Link } from "react-router-dom"

function PostCard({ $id, featuredimage, title }) {

   console.log("Image ID:", featuredimage)
  console.log("Preview URL:", service.GetFilePreview(featuredimage))
  
  return (
    

    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-lg bg-white p-5 hover:shadow-2xl duration-300 hover:scale-[1.06] transition-transform  cursor-pointer">
        
        <div className="w-full justify-center mb-4">
          {featuredimage ? (
            <img
              className="rounded-xl w-full h-60 object-cover"
              src={service.GetFilePreview(featuredimage)}
              alt={title}
            />
          ) : (
            <div className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center">
              No Image
            </div>
          )}
        </div>

        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
    
  )
  
}

export default PostCard
