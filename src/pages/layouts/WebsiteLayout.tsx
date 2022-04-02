import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'

const WebsiteLayout = () => {
  return (
    <div>
        <header >
            <Navbar/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            footer
        </footer>
    </div>
  )
}

export default WebsiteLayout