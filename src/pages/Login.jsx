import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/Authcontext'

const Login = () => {
      const {register,handleSubmit,formState:{errors},} = useForm()
      const { loginUser } = useContext(AuthContext)
      const navigate = useNavigate()
      const [authError, setAuthError] = useState('')

    
const onSubmit = (data) => {
  setAuthError('')
  const result = loginUser({
    email: data.Email,
    password: data.password,
  })

  if (!result.success) {
    setAuthError(result.message)
    return
  }

  navigate('/blog')
}
     
  
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center h-screen p-5 bg-slate-200'>
  
        <div className="p-6 bg-white rounded-md w-[380px] shadow-md">
            <h1 className='text-3xl font-bold text-center text-blue-700'>Login</h1>
            <div className="mt-10">
                <input type="text"   className='h-11 w-full focus:outline-none border border-gray-300 rounded-md pl-3' placeholder='Email'
                {...register('Email',
                  {required:"Email is reqired",
                    pattern:{
                      value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message:"Invalid email format"
                    }
                  }
  )}
                />
                {errors.Email && <p className='text-red-600 text-sm'>{errors.Email.message}</p> }
                 <input type="text"  className='h-11 w-full focus:outline-none border border-gray-300 rounded-md pl-3 mt-3' placeholder='Password'
                 {...register('password',
                  {required:'password is reqired',
                    minLength:{
                      value:8,
                      message:"Minimun 8 charactor reqired"
                    }
                  }
  )}
                 />
                 {errors.password && <p className='text-red-600 text-sm'>{errors.password.message}</p> }
                 {authError && <p className='text-red-600 text-sm mt-2'>{authError}</p> }
            </div>
            <p className='text-sm mt-5 '>If you have no account? <Link to='/register' className='text-blue-700 font-semibold'>Register Now</Link> </p>
            <button className='h-11 w-full focus:outline-none text-white bg-blue-600 mt-24 mb-4 font-semibold text-xl rounded-md pl-3' >Login</button>

        </div>
      
    
    </form>
  )
}

export default Login
