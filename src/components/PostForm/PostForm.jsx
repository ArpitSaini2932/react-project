import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, RTE, Select } from "../index"
import services from "../../appwrite/configuration"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import services from '../../appwrite/configuration'

function PostForm({ post }) {
  const { register, handleSubmit, setValue, getValues, watch, control } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.slug || '',
      content: post?.content || '',
      status: post?.status || 'active'
    }
  })

  const navigate = useNavigate()
  const userData = useSelector((state) => state.user.userData)

  const submit = async (data) => {
    if (post) {
      const file = await data.image[0] ? services.UploadFile(data.image[0]) : null

      if (file) {
        services.DeleteFile(post.featuredImg)
      }
      const dbPost = await services.UpdatePost(post.$id, {
        ...data,
        featuredImg: file ? file.$id : undefined,

      })
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }
    }
    else {
      const file = await data.image[0] ? services.UploadFile(data.image[0]) : null

      if (file) {
        const fileId = file.$id
        data.featuredImg = fileId
        const dbPost = await services.CreatePost({
          ...data,
          userId: userId.$id

        })
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
  }

  const slugTransform = useCallback(() => {
    if (value && typeof value === 'string')
      return value.trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, '-')
        .replace(/\s/g, "-")

    return ""
  }, [])

  React.useEffect(() => {
    const Subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }))

      }
    })
  }, [watch, slugTransform, setValue])
  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
      <div className='w-2/3 px-2'>
        <Input
          label="Title :"
          placeHolder="Title"
          className="mb-4"
          {...register("title", {
            required: true
          })}
        />

        <Input
          label="Slug"
          placeHolder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true
            }
            )
          }}
        />
        <RTE
          label="Content :"
          name="Content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div>
        <Input
          label="Featured Image"
          type="file"
          className="mb-4"
          accept="image/png ,image/jpg , image/gif , image/jpeg"
          {...register("image", { required: !post })}
        />

        {post &&
          (
            <div className='w-full mb-4'>
              <img
                src={services.GetFilePreview(post.featuredImg)}
                alt={post.title}
                className='rounded' />
            </div>
          )
        }
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