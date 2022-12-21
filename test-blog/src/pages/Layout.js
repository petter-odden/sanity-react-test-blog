import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout() {
    return (
        <div className='flex flex-col justify-between h-full'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
