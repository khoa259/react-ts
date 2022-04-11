import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CategoryType } from '../types/category'
type CategoriesAddProps = {
  onAddCate: (categories: CategoryType) => void
}
type FormInputs = {
  name: string
}

const CategoryAdd = (props: CategoriesAddProps) => {
  const { register, handleSubmit, formState } = useForm<FormInputs>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormInputs> = (data: any) => {
    props.onAddCate(data)
    //navigate('/admin/category')
  }
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <form action='' onSubmit={handleSubmit(onSubmit)} >
        <div className="px-4 py-6 sm:px-0">
          <div className=" h-96">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Tên danh mục
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" {...register('name', { required: true, })} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Tên sản phẩm" />
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

export default CategoryAdd