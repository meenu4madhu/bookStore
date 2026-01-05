import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { getAllAdminBooksAPI, updateBookStatusAPI } from '../../services/allAPI'
import {getAllAdminUsersAPI} from '../../services/allAPI'
import serverURL from '../../services/serverURL'
import { ToastContainer, toast } from 'react-toastify';


function AdminCollection() {
  const [tab,setTab]=useState(1)
  const [allBooks,setAllBooks]= useState([])
  const [allUsers,setAllUsers]= useState([])
  console.log(allUsers);
  
  console.log(allBooks);
  
  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      if(tab==1){
        getAllBooks(token)
      }else if(tab==2){
        getAllUsers(token)
      }
    }
  },[tab])
  const getAllBooks=async(token)=>{
const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
    const result = await getAllAdminBooksAPI(reqHeader)
    if(result.status==200){
      setAllBooks(result.data)

    }else{
      console.log(result);
      
    }
  }

  const getAllUsers=async(token)=>{
const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
    const result = await getAllAdminUsersAPI(reqHeader)
    if(result.status==200){
      
      setAllUsers(result.data)

    }else{
      console.log(result);
      
    }
  }

  const updateBookStatus = async(id)=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
    const result = await updateBookStatusAPI(id,reqHeader)
    if(result.status==200)
    {
      toast.success("Book Status Updated!!!")
      getAllBooks(token)
    }else{
      console.log(result);
      
    }

  }


  return (
   <>
    <AdminHeader/>
    <div className="md:grid grid-cols-5">
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className="col-span-4 p-10">
     <h1 className="my-10 text-center text-3xl font-bold">All Collections</h1>
     {/* tab */}
     <div className="flex my-10 justify-center items-center">
      <p onClick={()=>setTab(1)} className={tab==1 ?"text-blue-600 font-bold border-t border-l border-r p-3 border-gray-200 cursor-pointer text-xl":"border-b font-bold border-gray-200 text-xl p-3"}>Books</p>
      <p onClick={()=>setTab(2)} className={tab==2 ?"text-blue-600 font-bold border-t border-l border-r p-3 border-gray-200 cursor-pointer text-xl":"border-b font-bold border-gray-200 text-xl p-3"}>Users</p>
     </div>
     {/* tab contents */}
     {
      tab==1 &&
      <div className='md:grid grid-cols-4 w-full my-5'>
        {/* duplicate book card */}
      {
        allBooks?.length>0 ?
        allBooks?.map(book=>(
 <div key={book?._id} className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
          <img width={'300px'} height={'300px'} src={book?.imageURL} alt="book" /><div className="flex flex-col justify-center items-center mt-4">
            <h3 className="text-blue-600 font-bold text-lg">{book?.author}</h3>
            <h4 className="text-lg">{book?.title}</h4>
            <h4>$ {book?.discountPrice}</h4>

            <div className='grid mt-3 w-full'>
              {
                book?.status !="approved"?
              <button onClick={() => updateBookStatus(book?._id)}
 className='bg-green-600 text-white p-2'>APPROVE</button>
              :
              <img width={'80px'} src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-green-check-mark-icon-flat-style-png-image_5253210.jpg" alt="check" />
              }
            </div>
          </div>
        </div>
        ))
        :
        <p>loading</p>
        
      }
      </div>

    }
     {
      tab==2 &&
      <div className='md:grid grid-cols-3 w-full my-5'>
        {/* duplicate user card */}
    {
      allUsers?.length>0 ?
        allUsers?.map(user=>(
      <div key={user?._id} className="rounded bg-gray-200 p-3 m-2 text-wrap">
        <p className="text-red-600 font-bold">
          ID :{user?._id}
        </p>
        <div className="flex items-center text-wrap mt-2">
     {/* user img */}
     <img width={'90px'} height={'90px'} style={{borderRadius:'50%'}} src={user?.picture?user?.picture.startsWith("https://lh3.googleusercontent.com/")?user?.picture:`${serverURL}/uploads/${user.picture}`:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qDtxeQzzxnCpWee7nukLA_pFHf5UZuYYyhrTPVNZOQ&s"} alt="user" />
    {/* content */}
    <div className="ms-5">
      <h4 className="font-bold text-2xl text-blue-800">{user?.username}</h4>
      <p>{user?.email}</p>
    </div>
    </div>
      </div>
       ))
        :
        <p>loading</p>
      }
      
      </div>
     }
      </div>
       {/* toast */}
         <ToastContainer
      position="top-center"
      autoClose={2000}
      theme="colored"
      />
    </div>    
    <Footer/>
    </>
  )
}

export default AdminCollection