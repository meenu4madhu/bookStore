import React from 'react'
import { FaMobile } from 'react-icons/fa'
import { FaLocationDot, FaMapLocation, FaMapLocationDot } from 'react-icons/fa6'
import { IoCallSharp } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";
import { LiaTelegramPlane } from "react-icons/lia";
import Footer from '../../components/Footer';


function Contact() {
  return (
    <>
    <div className="m-15">
      <h1 className='text-center text-3xl flex-row'>Contacts</h1>
      <p className='text-center text-xl my-5'>If you have any questions about our wide collection of books, ongoing offers, or special events, our friendly team is always available to guide you and make your experience smoother. You can reach out to us anytime for personalised recommendations, order-related inquiries, or assistance with finding the perfect book that matches your interests. Whether you choose to visit our store, call us, or send us a message, we are committed to responding quickly and ensuring you receive the support you need.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3  gap-10 px-5 md:px-20'>
      <div className='flex  items-start gap-5'>
        <FaLocationDot className=' text-6xl  bg-gray-200 p-4 rounded-full' />
        <p className='ms-2 mt-1'>123 Main Street,Apt4B <br />Anytown,CA 91234</p>
      </div>
      <div className='flex  items-start gap-5'>
        <IoCallSharp className=' text-6xl  bg-gray-200 p-4 rounded-full' />
        <p className='ms-1 mt-4'>+91 9357924680</p>
      </div>
      <div className='flex  items-start '>
        <IoIosMailOpen className=' text-6xl  bg-gray-200 p-4 rounded-full ' />
        <p className='ms-5 mt-4'>bookstor4u@gmail.com</p>
      </div>
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-20 my-10">
      <div className='bg-gray-200 rounded-lg p-6'>
        <h4 className='text-center font-bold text-xl mt-7 mb-5'>Send me Message</h4>
       <input type="text" placeholder='Name' className='bg-white w-full text-black placeholder-gray-400 p-2 rounded me-5 mb-5' />
        <input type="text" placeholder='Email ID' className='bg-white w-full text-black placeholder-gray-400  p-2 rounded me-5 mb-5' />
        <textarea 
        placeholder="Message"
      className="bg-white w-full text-black placeholder-gray-400 p-5 rounded me-5 mb-5 h-25  resize-none placeholder:top-1 placeholder:left-2 placeholder:absolute">  
      </textarea>
      <button type='button' className='w-full p-2 bg-blue-900 rounded me-5 text-white flex flex-row justify-center'>Send<LiaTelegramPlane className='ms-1 mt-1' /></button>
      </div>
      <div className='flex flex-col  w-150 rounded '>
      <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9810286902324!2d-73.99106972395762!3d40.733259737155224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599c36e3e86f%3A0xcedaa6b8b3da8932!2sStrand%20Book%20Store!5e0!3m2!1sen!2sin!4v1700001111111"
    width="100%"
    height="450"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    style={{ border: 0 }}></iframe>

      </div>
      </div>
      <Footer/>
    </>
 )
}

export default Contact