import React from 'react'

import Search from './Search'
import { NavLink } from 'react-router-dom'
import Cart from './Cart'
import DropDown from './DropDown'

const Navbar = () => {
  return (
  

<div>
    <nav className="bg-white dark:bg-gray-800 w-screen shadow py-4 ">
        <div className="w-full mx-auto px-8">
            <div className="flex items-center justify-between h-16">
                <div className=" flex items-center">
                    <a className="flex-shrink-0" href="/">
                        <img className="h-8 w-8" src="https://www.tailwind-kit.com/icons/rocket.svg" alt="Workflow"/>
                    </a>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a className="text-gray-700  px-3 py-2 rounded-md text-md font-medium" href="/">
                                Trang Chủ  
                            </a>
                            <a className="text-gray-700  hover:text-black px-3 py-2 rounded-md text-md font-medium" href="products">
                                Sản Phẩm 
                            </a>
                            <a className="text-gray-700  hover:text-black px-3 py-2 rounded-md text-md font-medium" href="/#">
                                Danh Mục
                            </a>
                            <a className="text-gray-700  hover:text-black px-3 py-2 rounded-md text-md font-medium" href="/#">
                                About
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex pr-20 justify-evenly w-2/6'>
                <Search/>
                <Cart/>
                <DropDown/>
                </div>
                    <div className="-mr-2 flex md:hidden">
                        <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
    
            </nav>
        </div>



  )
}

export default Navbar