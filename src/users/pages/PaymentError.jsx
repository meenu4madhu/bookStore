import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function PaymentError() {
  return (
  <>
    <Header/>
    <div className="min-h-screen flex justify-center items-center md:px-20 px-5">
     <div className="md:grid grid-cols-2 gap-10">
        <div>
            <h1 className="md:text-4xl text-red-800">Sorry!!!Pyment Failed...</h1>
            <h2 className="my-10 md:text-xl ">We appologize for the inconviene caused  and appreciate your visit to Bookstore..... </h2>
                <Link to={'/book'} className='flex items-center bg-red-700 p-2 w-60 text-white'><FaBackward className='me-2 '/>Explore More Books...</Link>
        </div>
        <div><img className='w-130' src="https://cdn.dribbble.com/userupload/23003310/file/original-6396208ee0571627a9e2e9987dcc1974.gif" alt="payment-success" /></div>
     </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default PaymentError