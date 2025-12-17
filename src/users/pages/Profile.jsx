import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import Sellbook from '../components/Sellbook'
import Purchase from '../components/Purchase'
import Bookstatus from '../components/Bookstatus'


function Profile() {
  const [tab,setTab]=useState(1)
  const [dp,setDp] = useState("")
  const [username,setUsername] = useState("")
  console.log(dp);
  console.log(username);
  

  useEffect(()=>{
    if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
       const user = JSON.parse(sessionStorage.getItem("user"))
       setUsername(user?.username)
       setDp(user?.picture)
    }
  },[])
  
  return (
    <>
    <Header/>
    {/* black div */}
    <div style={{height:'200px'}} className="bg-black"></div>
    {/* profile img */}
    <div style={{width:'230px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}} className="bg-white p-3">
      <img style={{width:'200px',height:'200px' ,borderRadius:'50%'}} src={dp?dp:"https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg"} alt="profile" />
    </div>
    {/* name with edit block */}
    <div className="md:flex  justify-between items-center px-20 my-5">
      <h1 className="text-2xl font-bold flex items-center">{username} <FaCircleCheck className='text-blue-400 ms-5'/></h1>
     <Edit/>
    </div>
    <p className="text-justify md:px-20 px-5 my-5">Hello! I’m a book lover who enjoys discovering new stories and exploring different genres. I love reading in my free time, collecting my favorite titles, and sharing recommendations with others. This bookstore is my happy place where I can find new books, track my purchases, and build my personal reading collection.I’m a passionate reader who loves getting lost in books. Whether it’s a classic novel or a new bestseller, I enjoy exploring different stories. This profile helps me keep track of my reading journey and discover books that match my interests.I’m a passionate reader who loves getting lost in books. Whether it’s a classic novel or a new bestseller, I enjoy exploring different stories. This profile helps me keep track of my reading journey and discover books that match my interests.</p>
   {/* tab with contents */}
   <div className="md:px-40">
    {/* tabs */}
    <div className="flex justify-center items-center my-8 font-medium text-lg">
      <p onClick={()=>setTab(1)} className={tab==1?"text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer":"border-gray-200 border-b p-4 cursor-pointer"}>Sell Books</p>
      <p onClick={()=>setTab(2)} className={tab==2?"text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer":"border-gray-200 border-b p-4 cursor-pointer"}>Book Status</p>
      <p onClick={()=>setTab(3)} className={tab==3?"text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer":"border-gray-200 border-b p-4 cursor-pointer"}>Purchase History</p>
    </div>
    {/* contents */}
   {
    tab==1 &&
    <Sellbook/>
    }
   {
    tab==2 &&
    <Bookstatus/>
    }
    {
      tab==3 &&
      <Purchase/>
      }
   </div>
    <Footer/>
    </>
  )
}

export default Profile