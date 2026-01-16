import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { Container, Button } from '../components'
import parse from "html-react-parser"
import { useSelector } from 'react-redux'
import AppWriteServices from "../appwrite/configuration"


export default function Posts() {
    const [posts, setPosts] = useState([])
    const { slug } = useParams()
    const Navigate = useNavigate()

    const UserData = useSelector((Data) => Data.auth.UserData)

    const isAuthor = posts && UserData ? posts.userId === UserData.$id : false

    useEffect(() => {
        if (slug) {
            AppWriteServices.GetPost(slug).then((posts) => {
                if (posts) {
                    setPosts(posts)
                }
                else {
                    Navigate("/")
                }
            })
        }
    }, [slug, Navigate])

    const DeletePost = () => {
        AppWriteServices.DeletePost(posts.$id).then((status) => {
            if (status) {
                AppWriteServices.DeleteFile(posts.featuredImg)
                Navigate("/")
            }
        })
    }

    return posts ? (
        <div className='py-8'>
            <Container>
                <div className='flex relative justify-center mb-4 w-full border rounded-xl p-2'>
                    <img src={AppWriteServices.GetFilePreview(posts.featuredImg)} alt={posts.title} className='rounded-xl' />

                    {isAuthor && (
                        <div className='absolute right-6  top-6'>
                            <Link to={`/edit-post/${posts.$id}`} >
                                <Button
                                    bgColor='bg-green-300'
                                    className='mr-3'
                                >Edit</Button>
                            </Link>
                            <Button onClick={DeletePost}
                            bg-red-400 >
                                Delete 
                            </Button>
                        </div>
                    )}
                </div>

                 <div className='w-full mb-6'>
                    <h1 className='text-2xl font-bold '>
                        {posts.title}
                    </h1>
                 </div>
                 <div className='browser-css'> {parse(posts.content)}</div>
            </Container>
        </div>


    ) : null
}

