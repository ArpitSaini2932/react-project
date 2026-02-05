import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { login as authLogin } from "../store/authSlice"
import { Button, Input, Logo,} from "./index"
import { useDispatch } from 'react-redux'
import authservice from '../appwrite/auth'
import { useForm } from 'react-hook-form'


function Login() {
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = async (data) => {
        setError("")
        try {
            const session = await authservice.login(data)
            if (session) {
                const userdata = await authservice.GetCurrentUser()
                if (userdata) {
                    dispatch(authLogin(userdata))
                    navigate("/all-posts")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div
            className='items-center flex mx-auto w-auto max-w-lg my-10 bg-gray-100 rounded-xl  border-black/10 border justify-center '
        >
            <div className={`mx-auto w-full max-w-lg bg-gray rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-25 '>
                        <Logo width='100%' />
                    </span>

                </div>
                <h2 className='text-2xl font-bold text-center leading-tight'>
                    Sign in to your Account
                </h2>
                <p className='mt-2 text-base text-center text-black/60'>
                    don&apos;t have an account? &nbsp;
                    <Link to='/signup'
                        className='font-medium text-primary transition-all duration-200 hover:underline'
                    > Sign Up</Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form
                onSubmit={handleSubmit(login)}
                className='mt-8'
                >
                   <div className='space-y-5 flex justify-center items-center flex-col'>
                     <Input
                     label="Email: "
                     placeholder='Enter Your Email...'
                     type='email'
                     {...register("email", {
                        required: true,
                        validate:{
                            matchPatern : (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                                 "Email address must be a valid address",
                        }
                     })}
                     />
                     <Input 
                     label= "Password"
                     placeholder='Enter Your Passwword '
                     type='password'
                     {...register("password",{
                        required: true
                     })}
                     />
                     <button 
                     
                     type='submit'
                     className=' font-bold bg-blue-500  w-25 px-3 py-2 text-center text-primary hover:scale-[1.06] duration-300 hover:bg-blue-600 mb-3 mt-3 rounded-lg cursor-pointer'>Sign In</button>
                     </div>     
                </form>
            </div>
        </div>
    )
}

export default Login