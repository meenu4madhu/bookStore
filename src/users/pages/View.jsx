import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { FaX } from 'react-icons/fa6'
import { purchaseBookAPI, viewBookAPI } from '../../services/allAPI'
import serverURL from '../../services/serverURL'
import {loadStripe} from '@stripe/stripe-js';


function View() {
  const [modalStatus,setmodalStatus]=useState(false)
  const {id} = useParams()
  console.log(id);
  
  const [bookDetails, setBookDetails] = useState({})
  // console.log(bookDetails);
  
  useEffect(()=>{
     
        viewBook()
      }
    ,[])
  
  const viewBook = async()=>{
    const token=sessionStorage.getItem("token")
    if(token){
    const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
 
    const result =  await viewBookAPI(reqHeader,id)
    if(result.status==200){
       setBookDetails(result.data)
       
       
    }else{
      
      console.log(result);
      
      
    }
    }
  }
  const makePayment=async()=>{
    // to view stripe payment window in browser
   const stripe = await loadStripe('pk_test_51Sl03b9BXIlqNzxhsHao2htonv89Z08BgnMAMDNyTof5nTFmjHJZbHCMyuvWdTG3Zy8SVXQynIhrsGVEiQ5sWghA00RsMePRAx');
   //   api call for checkout
   
    const token=sessionStorage.getItem("token")
    if(token){
    const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
 
    const result =  await purchaseBookAPI(id,reqHeader)
    if(result.status==200){
      const {checkoutURL}=result.data
      window.location.href=checkoutURL 
    }else{
      console.log(result); 
    }
  }
  }
  return (
    <>
    <Header/>
    {   
    <div  className="md:m-10 m-5">
    <div className="shadow border p-5 shadow-gray-200">  
    
            
      <div  className="md:grid grid-cols-4 gap-x-10">
        {/* images */}
        <div className="col-span-1">
          <img  className='w-full' src={bookDetails?.imageURL} alt="book" />
           </div>
           {/* book details columns */}
          
           <div className="col-span-3">
            <div className="flex  justify-between items-center mt-5 md:mt-0">
              <h1 className="text-2xl font-black">{bookDetails?.title}</h1>
              <button onClick={()=>setmodalStatus(true)}  className="text-gray-400"><FaEye/></button>
            </div>
            <p className="my-3 text-blue-700">{bookDetails?.author}</p>
            <div className="md:grid grid-cols-3 gap-5 my-10">
              <p className="font-bold">Publisher : {bookDetails?.publisher}</p>
              <p className="font-bold">Language : {bookDetails?.language}</p>
              <p className="font-bold">No of pages : {bookDetails?.pages}</p>
              <p className="font-bold">Original Price :{bookDetails?.price} </p>
              <p className="font-bold">ISBN :{bookDetails?.isbn} </p>
              <p className="font-bold">Category :{bookDetails?.category} </p>
              <p className="font-bold">Seller :{bookDetails?.sellerMail} </p>
            </div>
            <div className="md:my-10 my-4">
              <p className="font-bold text-lg">{bookDetails?.abstract}</p>
            </div>
            <div className="flex justify-end">
              <Link to={'/book'} className='bg-blue-700 p-2 text-white flex items-center rounded'><FaBackward className='me-2'/> Back</Link>
           <button onClick={makePayment} className='bg-green-700 p-2 rounded text-white ms-5'>Buy $ {bookDetails?.discountPrice}</button>
            </div>
           </div>
         
      </div>
      
      
     
      
            
       
    </div>
    </div>
}
    {/* modal */}
   {
   modalStatus &&
   <div onClick={()=>setmodalStatus(false)} className="relative z-10">
      <div className="bg-gray-500/75 fixed inset-0">
      <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-2xl md:w-250 w-100">
        {/* modal titrle */}
        <div className="bg-black text-white p-3 flex justify-between items-center">
          <h3>Books Images</h3>
          <FaX onClick={()=>setmodalStatus(false)}/>
        </div>
        {/* MODAL body */}
        <div className="relative p-5">
          <p className="text-blue-600 flex items-center">
            <FaCamera className='me-2'/>Camera clicks of the book in the hand of seller
          </p>
          {/* book images in row */}
          <div className="md:flex flex-wrap my-4">
            {bookDetails?.uploadImages?.map((fileName)=>(
            <img key={fileName} className='md:w-75 w-50 md:me-2 mb-2 md:mb-0' src={`${serverURL}/uploads/${fileName}`} alt="book" />
           )) }</div>
        </div>
        </div>
        </div>
        </div>
    </div>}
     <Footer/>
   
    </>
  )
}

export default View