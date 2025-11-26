import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div  className='w-full flex flex-col md:flex-row bg-black text-white px-6 py-10 justify-between gap-10  '>
   <div className='flex flex-col'>
    <h1 className='font-bold mb-3 mt-5 '>ABOUT US</h1>
    <p>As publishers it was our dream to open a bookshop that understood <br /> art  and design books enough to dedicate an entire space to thegenre<br />to create an atmosphere as beautiful, luring and sleek as the books it <br /> would house; and to initiate a movementin keeping with the exciting <br /> leaps and bounds the country was making in design.</p>
   </div>
  <div className='flex flex-col md:ms-15'>
   <h1 className=' font-bold  mb-3 '>NEWS LETTER</h1> 
   <p>Stay updated with our latest treands</p>
   
    <div className='flex items-center mt-3'> 
    <input type="text" placeholder='Email ID' className='bg-white text-black w-50 p-2' />
    <button><FaArrowRight className='bg-yellow-400 h-10 w-10 p-2' /></button>
   </div>
   
  </div>
  <div className='flex flex-col md:ms-30'>
   <h1 className=' font-bold  mb-3  '>FOLLOW US</h1> 
   <p>Let us be social</p>
   <div className='flex items-center mt-5'> 
    <FaInstagram />
    <FaXTwitter className='ms-1' />
    <FaFacebook className='ms-1'/>
    <FaLinkedin className='ms-1'/>
   </div>
  </div>
    </div>
    <div className="bg-blue-900 md:h-15">
      <p className='text-center pt-5 text-white'>Copyright © 2023 All rights reserved | 
    This website is made with 🤍 By Luminar Technolab</p>
    </div>
    </>
  )
}

export default Footer