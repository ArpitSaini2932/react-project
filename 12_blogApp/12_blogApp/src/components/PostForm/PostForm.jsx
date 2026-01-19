import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, RTE, Select } from "../index"
import services from "../../appwrite/configuration"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({ post }) {
  const { register, handleSubmit, setValue, getValues, watch, control, reset } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      status: "active",
    }
  })

  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)

  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string')
      return value.trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-")
    return ""
  }, [])

  React.useEffect(() => {
  if (post) {
    reset({
      title: post.title || "",
      slug: post.slug || slugTransform(post.title || ""), 
      content: post.content || "",
      status: post.status || "active",
    })
  }
}, [post, reset, slugTransform])

  const submit = async (data) => {
    try {
      if (post) {
    
        const file = data?.image?.[0] ? await services.UploadFile(data.image[0]) : null

      
        if (file && post.featuredimage) {
          await services.DeleteFile(post.featuredimage)
        }

        const dbPost = await services.UpdatePost(post.$id, {
          ...data,
          featuredimage: file ? file.$id : post.featuredimage,
          userId: userData.$id,
        })

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
      } else {
        const file = data?.image?.[0] ? await services.UploadFile(data.image[0]) : null

        if (!file) return

        const dbPost = await services.CreatePost({
          ...data,
          featuredimage: file.$id,
          userId: userData.$id,
        })

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
      }
    } catch (error) {
      console.log("PostForm submit error:", error)
    }
  }

 
  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue("slug", slugTransform(value.title), { shouldValidate: true })
      }
    })

    return () => subscription.unsubscribe()
  }, [watch, slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
      <div className='w-2/3 px-2'>
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />

        <Input
          label="Slug"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true
            })
          }}
        />

        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      <div className='w-1/3 px-2'>
        <Input
          label="Featured Image"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/gif, image/jpeg"
          {...register("image", { required: !post })}
        />

        {post?.featuredimage && (
          <div className='w-full mb-4'>
            <img
              src={services.GetFilePreview(post.featuredimage)}
              alt={post.title}
              className='rounded'
            />
          </div>
        )}

        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />

        <Button
          type='submit'
          bgColor={post ? "bg-green-500" : undefined}
          className='w-full'
        >
          {post ? "Update" : 'Submit'}
        </Button>
      </div>
    </form>
  )
}

export default PostForm
