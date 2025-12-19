import React, { useEffect, useState } from 'react'
import { getAllUserBoughtBooksAPI } from '../../services/allAPI'
function Purchase() {
  const [userBooks,setUserBooks]=useState([])
    console.log(userBooks)
     useEffect(()=>{
        getUserBoughtBooks()
      },[])
      const getUserBoughtBooks=async()=>{
        const token=sessionStorage.getItem("token")
        if(token){
          const reqHeader={
            "Authorization":`Bearer ${token}`
          }
          const result = await getAllUserBoughtBooksAPI(reqHeader)
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
                {/* purchase */}
                <img className='w-40' src="https://static.vecteezy.com/system/resources/previews/023/629/698/non_2x/web-button-icon-purchase-button-free-png.png" alt="pending" />
               
            </div>
            </div>
            
      <div className="px-4 mt-4 md:mt-0">
        <img className='w-100' src={book?.imageURL} 
        alt="book" />

      </div>
    </div>
    </div>
       )):<p className='text-center font-bold'>Books are not uploaded yet...</p>
     }
    </div>
  )
}

export default Purchase