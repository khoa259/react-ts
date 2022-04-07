import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ProductType } from '../types/product'

type ProductManagerProp = {
  products: ProductType[],
  onRemove: (id:string) => void
}

const ProductManager = ({ products, onRemove }: ProductManagerProp) => {
  return (
<div className="table w-full p-2">
  <NavLink to='add'>
    <button className='bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded mb-3'>Add</button>
  </NavLink>
  <table className="w-full border">
    <thead>
      <tr className="bg-gray-50 border-b">
        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
          <div className="flex items-center justify-center font-medium ">
            Stt
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </th>
        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
          <div className="flex items-center justify-center font-medium">
            Name
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </th>
        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
          <div className="flex items-center justify-center font-medium">
            Img
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </th>
        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
          <div className="flex items-center justify-center font-medium">
            Price
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </th>
        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
          <div className="flex items-center justify-center font-medium">
            Desc
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </th>
        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
          <div className="flex items-center justify-center font-medium">
            Action
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      {products?.map((item,index)=>
      <tr key={index} className="bg-gray-100 text-center border-b text-sm text-gray-600 ">
        <td className="w-20 p-2 border-r">{index+1}</td>
        <td className="w-52 p-2 border-r">{item.name}</td>
        <td className="w-52 p-2 border-r"><img className='mx-auto' src={item.img} width='180' alt="" /></td>
        <td className="w-48 p-2 border-r">{item.price}$</td>
        <td className="p-2 border-r">{item.desc}</td>
        <td className='w-48'>
          <button className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin"><Link to={`${item._id}/edit`}>Edit</Link></button>
          <button onClick={()=> onRemove(item._id)} className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</button>
        </td>
      </tr>
      )}
    </tbody>
  </table>
</div>
  )
}

export default ProductManager