import React, { useEffect, useState } from "react"
import { useNavigate, Link, useParams } from "react-router-dom"
import { Container, Button } from "../components"
import parse from "html-react-parser"
import { useSelector } from "react-redux"
import AppWriteServices from "../appwrite/configuration"

export default function Posts() {
  const [post, setPost] = useState(null) 
  const { id } = useParams()
  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)


  const isAuthor = post && userData ? post.userId === userData.$id : false

  useEffect(() => {
    if (id) {
      AppWriteServices.GetPost(id).then((doc) => {
        if (doc) {
          setPost(doc)
        } else {
          navigate("/")
        }
      })
    }
  }, [id, navigate])

  const deletePost = () => {
    AppWriteServices.DeletePost(post.$id).then((status) => {
      if (status) {
        
        if (post.featuredimage) {
          AppWriteServices.DeleteFile(post.featuredimage)
        }
        navigate("/")
      }
    })
  }
  
  return post ? (
    <div className="py-8">
      <Container>
        <div className="flex relative justify-center h-120 mb-4 w-full rounded-xl p-2">
          {/* ✅ prevent missing fileId error */}
          {post.featuredimage ? (
            <img
              src={AppWriteServices.GetFilePreview(post.featuredimage)}
              alt={post.title}
              className="rounded-xl "
            />
          ) : null}

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-600" className="mr-3 rounded-xl hover:bg-green-700 hover:scale-[1.06] duration-300 hover:shadow-2xl  cursor-pointer">
                  Edit
                </Button>
              </Link>

              <Button onClick={deletePost} bgColor="bg-red-600" className=" rounded-xl hover:bg-red-700 hover:scale-[1.06] duration-300 hover:shadow-2xl cursor-pointer" >
                Delete
              </Button>
            </div>
          )}
        </div>
          <div className="border w-full mb-3"></div>
        <div className="w-full mb-6 justify-center flex items-center">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>

       
        <div className="browser-css mx-10">{parse(post.content || "")}</div>
        <p className="text-sm text-gray-500 mt-6  ">
          <div className="border w-full mb-3"></div>
  Written by <span className="font-semibold">{post.name}</span>
</p>

      </Container>
    </div>
  ) : null
}
