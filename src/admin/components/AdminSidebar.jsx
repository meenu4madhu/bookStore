import React from 'react'
import { FaBookReader, FaChartBar, FaHome } from 'react-icons/fa'
import { FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit md:flex flex-col text-center'>
      {/* admin img */}
      <div className="my-10 pt-2 flex justify-center items-center">
          <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="person" />
      
      </div>
      {/* name */}
      <h1 className="text-xl mb-5 font-bold">name</h1>
      {/* links */}
      <div className="mt-10 flex flex-col justify-center items-center ">
        <div className="mb-3">
          <Link to={'/admin/home'} className='flex items-center '><FaHome className='me-2'/>Dashboard</Link>
        </div>
        <div className="mb-3">
          <Link to={'/admin/resources'} className='flex items-center'><FaBookReader className='me-2'/>Resources</Link>
        </div>
        <div className="mb-3">
          <Link to={'/admin/profile'} className='flex items-center'><FaGears className='me-2'/>Settings</Link>
        </div>
      </div>
      </div>
  )
}

export default AdminSidebar