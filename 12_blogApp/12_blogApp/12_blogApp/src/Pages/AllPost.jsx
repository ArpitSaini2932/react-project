import React, { useState, useEffect } from "react"
import { Container, PostCard } from "../components"
import AppwriteServices from "../appwrite/configuration"

function AllPost() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    AppwriteServices.GetPosts().then((res) => {
      if (res) {
        setPosts(res.documents)
      }
    })
  }, [])

  return (
    <div className="py-8  w-full">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard
                $id={post.$id}
                title={post.title}
                featuredimage={post.featuredimage}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
