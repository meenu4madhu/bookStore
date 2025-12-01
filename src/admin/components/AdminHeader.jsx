import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
    <div className='flex justify-between items-center p-3 md:px-20'>
      {/* logo with title */}
      <div className="flex items-center">
        <img width={'80px'} height={'80px'} src="https://img.pikbest.com/png-images/20241012/book-icon-vector-design_10954004.png!sw800" alt="logo" />
      <p className='font-bold text-2xl'>BOOKSTORE</p>
      </div>
      {/* logout */}
      <button className='bg-black px-3 py-2 rounded text-white flex items-center hover:bg-white hover:text-black'><FaPowerOff className='me-2'/>LOG OUT</button>
    
    </div>
    <div className="bg-black p-2">
      <marquee>
        <p className='text-white'>Welcom , Admin! You are all set to mange and monitor the system. Let's get into work!</p>
      </marquee>
    </div>
    </>
  )
}

export default AdminHeader