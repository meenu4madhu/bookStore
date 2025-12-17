import React from 'react'
import { useState } from 'react'
import { getAllUserBooksAPI } from '../../services/allAPI'
import { useEffect } from 'react'

function Bookstatus() {
  const [userBooks,setUserBooks]=useState([])
  console.log(userBooks)
  
  useEffect(()=>{
    getUserUploadBooks()
  },[])
  const getUserUploadBooks=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        "Authorization":`Bearer ${token}`
      }
      const result = await getAllUserBooksAPI(reqHeader)
      if(result.status==200){
        setUserBooks(result.data)
       
        
        
      }
      else{
       console.log(result);
       
      }
    }
  }
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
        {/* book div duplicate */}
       { 
       userBooks?.length>0?
       userBooks?.map(book=>(
          <div className="bg-gray-200 p-5 rounded">
                  <div className="md:grid grid-cols-[3fr_1fr]">
                <div>
                  <h2 className="text-2xl">{book?.title}</h2>
                  <h3 className="text-xl">{book?.author}</h3>
                  <h4 className="text-lg text-red-500">$ {book?.discountPrice}</h4>
                  <p className="text-justify">{book?.abstract}</p>
                  
                  <div className="flex  mt-5">
                  {  
                      book?.status=="pending"?
                    /* pending */
                      <img className='w-40' src="/pending.png" alt="pending" />
                      : book?.status=="approved"?
                    /* approved */
                      <img className='w-50 ' src="/approved.png" alt="approved" />
                      :
                      /* sold */
                      <img className='w-30 ms-3'  src="/sold.png" alt="" />
                  }
                  </div>
                  </div>
                  
            <div className="px-4 mt-4 md:mt-0">
              <img className='w-100' src={book?.imageURL}
              alt="book" />
              <div className="flex justify-end">
                <button className='p-2 bg-red-600 text-white mt-5'>DELETE</button>
            </div>
            </div>
          </div>
          </div>
          ))
      :
      <div className='text-center my-5 font-bold'>Books are not Uploaded...</div>
    }
    </div>
    
  )
}

export default Bookstatus