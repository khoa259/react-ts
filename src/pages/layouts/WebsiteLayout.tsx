import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const WebsiteLayout = () => {
  return (
    <div className='max-w-full mx-atuo'>
        <header >
            <Navbar/>
        </header>
        <main className='mb-4'>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default WebsiteLayout