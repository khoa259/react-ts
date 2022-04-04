import React from 'react'

const Search = () => {
  return (
    <div className="block">
    <div className="md:block -mr-2 flex">
        <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div className=" relative ">
                <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="components"/>
                </div>
                <button className='rounded rounded-lg p-2 bg-purple-500 text-white hover:bg-purple-600 duration-300'>Search </button>
            </form>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
        </div>
    </div>
  )
}

export default Search