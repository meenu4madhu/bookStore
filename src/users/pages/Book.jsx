import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllBooksPageAPI } from '../../services/allAPI'


function Book() {
  const [showcategoryList,setshowcategoryList]=useState(false)
  const [token,setToken] = useState("")
  const [allBooks,setAllBooks] = useState([])
  console.log(allBooks);
  
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllBooks(userToken)
    }
  },[])

  const getAllBooks = async(token)=>{
    const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
    const result =  await getAllBooksPageAPI(reqHeader)
    if(result.status==200){
      setAllBooks(result.data)
    }else{
      
      console.log(result);
      
    }
  }
 
  return (
    <>
      <Header/>

      {/* login - book page */}
     { 
        token ?
      <>
      <div className="flex flex-col justify-center items-center my-5">
        {/* bookstore web heading */}
        <h1 className="text-3xl font-bold my-5">All Books</h1>

        {/* search box */}
        <div className="flex my-5">
          <input 
            type="text" 
            placeholder="Search by title" 
            className="border p-2 border-gray-400 w-100" 
          />
          <button className="bg-black p-2 text-white">Search</button>
        </div>
      </div>

      {/* book and filter row */}
      <div className="md:grid grid-cols-4 md:px-20 p-5 mb-0">
        {/* filter */}
        <div className="col-span-1">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Filter</h1>
            <button onClick={()=>setshowcategoryList(!showcategoryList)} className="text-2xl md:hidden"><FaBars/></button>
          </div>
          {/* filter option */}
          <div className={showcategoryList?"block":"md:block hidden"}>
            {/* category1 */}
             <div className="mt-3">
              <input type="radio" name="filter" id="all"  />
              <label htmlFor="all" className='ms-3'>All</label>
            </div>
           {/* book category */}
            <div className="mt-3">
              <input type="radio" name="filter" id="demo"  />
              <label htmlFor="demo" className='ms-3'>Category Name</label>
            </div>
          </div>
        </div>
        {/* book row */}
        <div className="col-span-3">
        <div className="md:grid grid-cols-4 mt-5 md:mt-0">
          {/* bookcard div1 */}
          {
            allBooks?.length>0?
              allBooks?.map(book=>(
              <div key={book?._id} className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
          <img width={'300px'} height={'300px'} src={book?.imageURL} alt="book" /><div className="flex flex-col justify-center items-center mt-4">
            <h3 className="text-blue-600 font-bold text-lg">{book?.author}</h3>
            <h4 className="title-lg">{book?.title.slice(0,9)}...</h4>
            <Link to={`/book/${book?._id}/view`} className="bg-black py-2 px-5 mt-2 text-white">View</Link>
          </div>
          </div>
              ))
              :
              <p className='font-bold'>Loading.....</p>
           
         }
        
        
        
        </div>
        </div>
      </div>
      </>
      :
      <div className='w-full h-screen flex justify-center items-center flex-col'>
          {/* not login - book page */}
<img className='w-80 h-80 ' src="https://cdn-icons-gif.flaticon.com/11255/11255980.gif" alt="locked" />
<p className="text-xl font-bold my-5">Please <Link to={'/login'} className='underline text-blue-500'>Login</Link> to Explore More... </p>
      </div>
      
}
     
      <Footer/>
    </>
  )
}

export default Book
