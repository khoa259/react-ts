import React from 'react'
import { useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signup } from '../api/user'

type FormInputs ={
    name:string
    email:string
    password:string
}

const Signup = () => {
    const {register, handleSubmit, formState} = useForm<FormInputs>()
    const navigate = useNavigate()

    const onSubmit:SubmitHandler<FormInputs> = (data:any) => {
        signup(data)
        //navigate('/signin')
    }

    
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}> 
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">UserName</label>
                <div className="col-sm-10">
                <input type="text" {...register('name',{required:true})} className="form-control" id="staticEmail" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" {...register('email',{required:true})} className="form-control"  />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" {...register('password',{required:true})} className="form-control" id="inputPassword" />
                </div>
            </div>
            <button  className="btn btn-primary">Submit</button>
        </form>
    </div>

  )
}

export default Signup