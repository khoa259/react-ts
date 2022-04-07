import React from 'react'
import { Outlet } from 'react-router-dom'
import NavAmin from '../../components/admin/NavAmin'

const AdminLayout = () => {
  return (
    <div className='flex flex-row w-screen'>
      <header className=''>
        <NavAmin />
      </header>
      <main>
        <div className="px-16 py-4 text-gray-700 pl-28 h-full w-screen">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout