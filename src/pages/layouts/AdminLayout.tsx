import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <h1>Admin layout</h1>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout