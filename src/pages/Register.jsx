import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Authcontext'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { registerUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [authError, setAuthError] = useState('')

  const onsubmit = (data) => {
    setAuthError('')
    const result = registerUser({
      username: data.Username,
      email: data.Email,
      password: data.Password,
    })

    if (!result.success) {
      setAuthError(result.message)
      return
    }

    navigate('/blog')
  }

  return (
    <form action="" onSubmit={handleSubmit(onsubmit)} className='flex justify-center items-center p-5 h-screen bg-slate-200'>
  
        <div className="p-6 bg-white rounded-md w-[380px] shadow-md">
            <h1 className='text-3xl font-bold text-center text-blue-700'>Register</h1>
            <div className="mt-10">
                <input type="text" 
                {...register('Username',
                {required:'Username is reqired', 
                minLength:{
                  value:3,
                  message:'Minimum 3 charactor reqired'
                }})}
                 className='h-11 w-full focus:outline-none border border-gray-300 rounded-md pl-3' placeholder='Username' />
                 {errors.Username && <p className='text-red-600 text-sm mt-1'>{errors.Username.message}</p> }

                <input type="text"  
                className='h-11 w-full focus:outline-none border border-gray-300 rounded-md pl-3 my-2' placeholder='Email'
                {...register('Email',
                {required:'Email is required',
                  pattern:{
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:"invalid email format"
                  }}
                )}
                />
                 {errors.Email && <p className='text-red-600 text-sm'>{errors.Email.message}</p> }
                 <input type="text"   className='h-11 w-full focus:outline-none border border-gray-300 rounded-md pl-3' placeholder='Password'
                 {...register('Password',
                  {required:'password is required',
                    minLength:{
                      value:8,
                      message:"Minimum 8 charactor reqired"
                    }
                  }
                 )}
                 />
                  {errors.Password && <p className='text-red-600 text-sm mt-1'>{errors.Password.message}</p> }
                 {authError && <p className='text-red-600 text-sm mt-2'>{authError}</p>}
            </div>
             <p className='text-sm mt-5 '> have any account? <Link to='/login' className='text-blue-700 font-semibold'>Login Now</Link> </p>
            <button className='h-11 w-full focus:outline-none text-white bg-blue-600 mt-24 mb-4 font-semibold text-xl rounded-md pl-3'>Register</button>

        </div>
      
    
    </form>
  )
}

export default Register
