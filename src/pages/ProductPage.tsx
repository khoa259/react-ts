import React from 'react'
import { ProductType } from './types/product'
import {NavLink} from 'react-router-dom'

type ProductPageProps = {
    product: ProductType[];
}

const ProductPage = ({ product }: ProductPageProps) => {
    return (
        <div className="bg-white w-screen mt-20 ">
            
            <div className=" mx-auto max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold  text-gray-900 my-3">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                    {product?.map((item) =>
                        <NavLink to={`{item._id}`}className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 h-72 bg-gray-200 rounded-lg overflow-hidden">
                                <img src={item.img} alt="" className="w-full h-full object-center object-cover group-hover:opacity-75" width="280" height="280px"/>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{item.price}$</p>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>

    )
}

export default ProductPage