import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Banner from '../components/Banner'
import { ProductType } from './types/product'


type ProductProps = {
  product: ProductType[]
}
const Homepage = ({ product }: ProductProps) => {
  // const getProductsLimit = async(product:ProductProps){
  //   const {data}
  // }
// const id = useParams();

  return (
  
    <div className='w-screen'>
      <Banner />
      <div className="bg-white mx-auto ">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-20 text-gray-900">New Arrival</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product?.map((item) =>
              <div className="group relative">
                <NavLink to={`products/${item._id}`}>
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img src= {item.img} alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-ml font-xl text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{item.price}$</p>
                  </div>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage