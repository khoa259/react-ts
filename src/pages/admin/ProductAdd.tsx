import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ProductType } from '../types/product'

type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormInputs = {
    name: string
    price: number
    img: string
    desc:string
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState } = useForm<FormInputs>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormInputs> = (data: any) => {
        props.onAdd(data)
        navigate('/admin/products')

    }

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <form action='' onSubmit={handleSubmit(onSubmit)} >
                <div className="px-4 py-6 sm:px-0">
                    <div className=" h-96">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Tên sản phẩm
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <input type="text" {...register('name', { required: true, })} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Tên sản phẩm" />
                                </div>
                            </div>
                            <div className="col-span-3 sm:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Giá sản phẩm
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <input type="number" {...register('price', { required: true, })} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Giá sản phẩm" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Mô Tả
                            </label>
                            <div className="mt-1">
                                <textarea {...register('desc')} name="about" rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" defaultValue={""} />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Cover photo
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <input type="text" {...register('img', { required: true })} className="border border-black" placeholder="upload img" />
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div><br />
                    <button className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">Thêm mới</button>
                </div>
            </form>
        </div>

    )
}

export default ProductAdd