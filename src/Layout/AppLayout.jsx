import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar/Sidebar'
import './applayout.css'
import Header from '../Components/Header/Header'


const AppLayout = () => {
  return (
    <div className='applayout'>
      <div className='side-bar'>
        <Sidebar />
      </div>
      <div className='outlet' >
        <Header />
        <Outlet />
      </div>

    </div>
  )
}

export default AppLayout
