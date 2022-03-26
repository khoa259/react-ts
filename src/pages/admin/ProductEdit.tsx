import React, { useEffect } from 'react'
import { useForm, SubmitHandler  } from 'react-hook-form'
import {useNavigate , useParams} from 'react-router-dom'
import { read } from '../../api/products'
import { ProductType } from '../types/product'
 
type ProductEditProps = {
    onUpdate:( products:ProductType) => void
}

type FormInputs ={
    name:string
    price:number
}

const ProductEdit = (props: ProductEditProps) => {
    const{ register, handleSubmit, formState:{errors}, reset } = useForm<FormInputs>()
    const navigate = useNavigate()
    const {id}:any = useParams()

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await read(id);
            console.log(data)
            reset(data)
        }
        getProducts()
    },[])


    const onSubmit: SubmitHandler<FormInputs> = (data:any) =>{
        props.onUpdate(data)
        navigate ('/admin/products')
    }
    
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name',{required:true})} placeholder='name'/>
            { errors.name && <span color='red'>Fields is required</span>}<br/>
            <input type="number"{...register('price',{required:true})}  placeholder='number'/><br/>
            <button>update</button>
        </form>

    </div>
  )
}

export default ProductEdit