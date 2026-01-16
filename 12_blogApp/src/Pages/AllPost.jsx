import React ,{useState,useEffect}  from 'react'
import { Container, PostCard } from '../components'
import AppwriteServices from "../appwrite/configuration"
function AllPost() {

  const [posts,setPosts ] = useState([])
  useEffect(() => {
    AppwriteServices.GetPosts([]).then((posts)={
   if (posts) {
     setPosts(posts.document)
    
   }
  })
  }, [])
  
  return (
    <div className='py-8 w-full'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  >
        <Container>
          <div className='flex flex-wrap'>
          {posts.map((posts)=>(
            <div key={posts.$id} className='p-2 w-1/4'>
              <PostCard post= {posts}/>
            </div>
          )
          )}
          </div>
        </Container>
    </div>
  )
}

export default AllPost