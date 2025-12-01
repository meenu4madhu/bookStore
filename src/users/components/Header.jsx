import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { FaBars, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
  const [listStatus,setlistStatus]=useState(false)
  const menubtnClicked=()=>{
    setlistStatus(!listStatus)
  }
  return (
    <>
    {/* upper-title login  */}
    <div className='grid grid-cols-3 p-3'>
     {/* logo with title */}
     <div className="flex items-center">
      <img width={'100px'} height={'100px'} src="https://img.pikbest.com/png-images/20241012/book-icon-vector-design_10954004.png!sw800" alt="logo" />
      <h1 className="text-2xl font-bold ms-1 md:hidden">BOOKSTORE</h1>
     </div>
     {/* title */}
     <div className="md:flex justify-center items-center hidden">
      <h1 className="text-3xl font-bold">
        BOOK STORE
      </h1>
     </div>
     {/* LOGIN */}
     <div className="md:flex justify-end items-center hidden">
      <FaInstagram/>
      <FaFacebook className='mx-2'/>
      <FaXTwitter/>
      <Link to={'/login'} className='flex border rounded px-2 py-1 justify-center hover:bg-black hover:text-white ms-1'><FaUser className='me-1'/> Login</Link>
      </div>
    </div>
   {/* lower part link& menu + login button */}
   <nav className="w-full p-2 bg-black text-white md:flex justify-center items-center">
    {/* div - menubar login btn */}
    <div className="flex justify-between items-center text-2xl md:hidden">
      {/* menu bar btn */}
      <button onClick={menubtnClicked}><FaBars/></button>
      {/* login link */}
       <Link to={'/login'} className='ms-4 flex border rounded px-2 py-1 items-center hover:bg-white hover:text-black  ms-1'><FaUser className='me-1'/> Login</Link>
    </div>
    {/* ul-link */}
    <ul className={listStatus? "flex flex-col":"md:flex justify-center items-center hidden"}>
      <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'}>HOME</Link></li>
       <li className='md:mx-4 my-3 md:my-0'><Link to={'/book'}>BOOKS</Link></li>
        <li className='md:mx-4 mb-3 md:mb-0'><Link to={'/contact'}>CONTACT</Link></li>
    </ul>
   </nav>
    </>
  )
}

export default Header