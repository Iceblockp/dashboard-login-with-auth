import React, { useEffect } from 'react'
import { Outlet,Link, useNavigate } from 'react-router-dom'

const DashboardPage = () => {
    const nav = useNavigate();

    useEffect(() => {

        const data = localStorage.getItem("auth");

        if(!data){
            nav('/login');
        }
        
    },[]);
  return (
    <div className=' grid grid-cols-10 bg-blue-900 '>
        <div className=' col-span-2 bg-blue-900 h-screen py-10 '>
            <ul>
                <Link to="/dashboard"><li className=' py-1 mb-2 mr-2 bg-gray-200'>Dashboard</li></Link>
                <Link to="/dashboard/table"><li className=' py-1 mb-2 mr-2 bg-gray-200'>Table</li></Link>
                <Link to="/dashboard/blog"><li className=' py-1 mb-2 mr-2 bg-gray-200'>Blog</li></Link>
            </ul>
        </div>
        <div className=' col-span-8 mt-10 bg-white '><Outlet/></div>
    </div>
  )
}

export default DashboardPage