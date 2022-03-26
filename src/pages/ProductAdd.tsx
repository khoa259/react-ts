import React, { useState } from 'react'
import { useForm, SubmitHandler  } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ProductType } from './types/product'

type ProductAddProps = {
    onAdd:(products:ProductType)=> void
}
type FormInputs ={
    name:string
    price:Number
}
const ProductAdd = (props: ProductAddProps) => {
    const {register, handleSubmit, formState} = useForm<FormInputs>()
    const navigate = useNavigate()
    
    const onSubmit:SubmitHandler<FormInputs> = data =>{
        props.onAdd(data)
        navigate('/admin/products')

    }
  
    return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text"{...register('name',{required:true ,minLength:5})} placeholder='name' /><br/>
            <input type="number" {...register('price',{required:true})} placeholder='price' /><br/>
            <button>add</button>
        </form>
    </div>
  )
}

export default ProductAdd