import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { login as authLogin } from "../store/authSlice"
import { Button, Input, Logo, logo } from "./index"
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
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div
            className='items-center flex  justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px] '>
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
                   <div className='space-y-5'>
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
                     <button type='submit'
                     className='w-full rounded'>Sign Up</button>
                     </div>     
                </form>
            </div>
        </div>
    )
}

export default Login