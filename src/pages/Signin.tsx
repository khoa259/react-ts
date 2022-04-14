import React from 'react'
import { useForm, SubmitHandler} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import {  signin } from '../api/user'
import { isAuthenticate} from '../utils/localstorage'

type FormInputs ={
    name:string
    email:string
    password:string | number
}


const Signin = () => {
    const { register, handleSubmit, formState:{errors}} = useForm<FormInputs>();
    const navigate = useNavigate()
    
    const onSubmit: SubmitHandler<FormInputs> = async (data:any) => {
        const {data: user} = await signin(data);
        localStorage.setItem('user', JSON.stringify(user))
        navigate ('/admin')
    }


  return (
   <div className="w-screen mt-40 flex justify-center items-center bg-white">
        <div className="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
            <div className="py-8">
                <img width={30} className="-mt-10" src="https://www.tailwind-kit.com/icons/rocket.svg" />
            </div>
            <form action='' onSubmit={handleSubmit(onSubmit)}>
                <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" {...register('email',{required:true})} placeholder="E-Mail " required /><br/>
                    { (errors.email) && <span className='text-red-500'>Fields is required</span>}<br/>

                <div className="flex flex-col space-y-1 py-4">
                    <input type='password' className="p-3 border-[1px] border-slate-500 rounded-sm w-80" {...register('password',{required:true})} placeholder="Password" />
                    { errors.password && <span className='text-red-500'>Fields is required</span>}<br/>

                    <p className="font-bold text-[#0070ba]">Forgot password?</p>
                </div>
                <div className="flex flex-col space-y-5 w-full">
                    <button className="w-full bg-[#0070ba] rounded-3xl p-1 text-white font-bold transition duration-200 hover:bg-[#003087]">Log in</button>
                        <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
                        <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
                        </div>
                </div>
            </form>
            <button className="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-1 text-[#0070ba] font-bold transition duration-200"><Link to='/signup'>Sign Up</Link></button>
        </div>
    </div>


  )
}

export default Signin