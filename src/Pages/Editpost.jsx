import React, { useState, useEffect } from 'react'
import { Container, PostForm } from '../components'
import appWriteServices from '../appwrite/configuration'
import { useNavigate, useParams } from 'react-router-dom'
function EditPost() {
    const [post, setPost] = useState(null)
    const Navigate = useNavigate()
    const { slug } = useParams()

    useEffect(() => {
        if (slug) {
            appWriteServices.GetPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        }
        else {
            Navigate('/');
        }
    }, [slug, Navigate])


    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost