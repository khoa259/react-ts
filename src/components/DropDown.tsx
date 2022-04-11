import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
type Props = {}


// const navigate= useNavigate()
export const logout = () =>{
    window.localStorage.clear()
    window.confirm('ra đi nhanh thế')
    window.location.href ='/'
}

const DropDown = (props: Props) => {
  return (
    <div className="relative mt-3">
      <input type="checkbox" id="sortbox" className="hidden absolute" />
      <label htmlFor="sortbox" className="flex items-center space-x-1 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
      </label>
      <div id="sortboxmenu" className="absolute mt-1 right-0 top-full min-w-max shadow rounded opacity-0 bg-gray-100 border border-gray-400 transition delay-75 ease-in-out z-10">
        <ul className="block text-right text-gray-900">
          <li><Link to='signup'className="block px-4 py-2 hover:bg-gray-200">Sign up</Link></li>
          <li><Link to='signin'className="block px-4 py-2 hover:bg-gray-200">Sign in</Link></li>
          <li><button onClick= {logout} className=' btn block px-4 py-2 hover:bg-gray-200'>Logout</button></li>
        </ul>
      </div>
    </div>
  )

}

export default DropDown