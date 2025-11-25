import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
function Home() {
  return (
    <>
    <Header/>
    <div className=''>
      {/* landing  part -search */}
      <div style={{height:'600px'}} className='flex justify-center items-center flex-col bg-[url(/bg-image.jpg)] bg-cover bg-center text-white'>
            <div style={{height:'600px',backgroundColor:'rgba(0,0,0,0.4)'}} className='w-full flex justify-center items-center flex-col '>
         <h1 className="text-5xl font-bold mb-2">Wonderful Gifts</h1>
         <p>Gift your family and friends a book</p>
         {/* search */}
         <div className="mt-9 flex">
          <input type="text" className='bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2 ' placeholder='Search book here ' />
          <button className='text-gray-500' style={{marginLeft:'-40px'}}>
            <FaSearch/>
          </button>
         </div>
      </div>
      </div>
      {/* new arrival */}
      <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
      <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
      <h2 className="text-2xl">Explore Our Ltest Collections</h2>
      {/* book row and col */}
      </section>
      {/* author */}
      {/* testimony */}
    </div>
    <Footer/>
    </>
 
  )
}

export default Home