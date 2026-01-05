import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'


function PaymentSuccess() {
  return (
    <>
    <Header/>
    <div className="min-h-screen flex justify-center items-center md:px-20 px-5">
     <div className="md:grid grid-cols-2 gap-10">
        <div>
            <h1 className="md:text-4xl text-blue-800">Congratulation!!!!</h1>
            <h2 className="my-10 md:text-xl ">Thankyou For purchasing with Bookstore.
                Hope you have a good time with us..... </h2>
                <Link to={'/book'} className='flex items-center bg-blue-700 p-2 w-60 text-white'><FaBackward className='me-2 '/>Explore More Books...</Link>
        </div>
        <div><img src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt="payment-success" /></div>
     </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default PaymentSuccess