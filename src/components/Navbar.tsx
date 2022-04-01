import React from 'react'
import Search from './Search'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid ">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="products">Product</NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="admin">Admin</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="signup">Signup</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="signin">Signin</NavLink>
          </li>
        </ul>
       <Search />
      </div>
    </div>
  </nav>

  )
}

export default Navbar