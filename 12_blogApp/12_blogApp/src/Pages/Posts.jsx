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
        <div className="flex relative justify-center mb-4 w-full border rounded-xl p-2">
          {/* ✅ prevent missing fileId error */}
          {post.featuredimage ? (
            <img
              src={AppWriteServices.GetFilePreview(post.featuredimage)}
              alt={post.title}
              className="rounded-xl"
            />
          ) : null}

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-300" className="mr-3">
                  Edit
                </Button>
              </Link>

              <Button onClick={deletePost} bgColor="bg-red-400">
                Delete
              </Button>
            </div>
          )}
        </div>

        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>

       
        <div className="browser-css">{parse(post.content || "")}</div>
      </Container>
    </div>
  ) : null
}
