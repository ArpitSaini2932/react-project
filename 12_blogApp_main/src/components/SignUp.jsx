import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { Button, Logo, Input } from "./index"
import { useForm } from 'react-hook-form'
import authservice from '../appwrite/auth'
import { current } from '@reduxjs/toolkit'
function SignUp() {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const signup = async (data) => {
        setError("")
        try {
            const UserData = await authservice.createAccount(data)
            if (UserData) {
                const currentUser = await authservice.GetCurrentUser()

                if (UserData) {
                    dispatch(login({UserData: currentUser}))
                    navigate("/all-posts")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center'>
            <div className={`mx-auto w-auto max-w-lg bg-gray-100 rounded-xl p-10 border-black/10 border`}>
             <div className='mb-2 flex  justify-center'>
              <span className='inline-block w-full max-w-25'>
                <Logo width='100%'/>
              </span>    
           </div>
           <h2 className='font-bold text-2xl leading-tight text-centre'> Sign up to create Account </h2>
            <p className='mb-2 text-centre text-base text-black/60'>
            Already have an Account?&nbsp;
            <Link to="/login"
            className='font-medium text-primary transition-all duration-200 hover:underline'
            >Sign In</Link>
                </p>
{error && <p className='text-red-600 mt-4 text-center'>{error}</p>}

            <form className='mt-8' onSubmit={handleSubmit(signup)}>
                <div className='space-y-5 flex justify-center items-center flex-col'>
                    
                     <Input type="text"
                    label = "name"
                    placeholder='Enter your Fulll Name'
                    {...register("name",{
                        required:true
                    })}
                    />

                    <Input type="text" 
                    label = "email"
                    placeholder='Enter you Email Address'
                    {...register("email",{
                        required:true,
                        validate:{
                            matchPatern : (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                                 "Email address must be a valid address",
                        }
                    })}
                    />

                    <Input type="password"
                    label = "Password "
                    placeholder='Enter your password'
                    {...register("password",{
                        required:true 
                    })}
                    />
                    <button
                    type='submit'
                    className='font-bold bg-blue-500  mt-3 w-37 px-3 py-2 text-center text-primary hover:scale-[1.06] duration-300 hover:bg-blue-600 mb-3 rounded-lg cursor-pointer'
                    >Create Account</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default SignUp