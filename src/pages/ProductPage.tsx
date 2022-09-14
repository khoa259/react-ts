import React from 'react'
import { ProductType } from './types/product'
import { Link, NavLink } from 'react-router-dom'

type ProductPageProps = {
    product: ProductType[];
}

const ProductPage = ({ product }: ProductPageProps) => {
    return (
        <div className="bg-white w-screen mt-20 ">
            <div className=" mx-auto max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold  text-gray-900 my-3">Products</h2>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {product?.map((item, index) =>
                        <div className="group relative" key={index}>
                            <Link to={`/products/${item._id}`}>
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img src={item.img} alt="Front of men's Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-ml font-semibold text-gray-700 whitespace-nowrap w-64 overflow-hidden text-ellipsis">
                                            {item.name}
                                        </h3>
                                        <p className="text-xl font-semibold text-red-400">{item.price}$</p>
                                        <p className="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>

    )
}

export default ProductPage