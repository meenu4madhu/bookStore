import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react'
import { getHomePageBooksAPI } from '../../services/allAPI'
import { searchContext } from '../../contextAPI/ShareContext'

function Home() {
  // const [searchKey,setSearchKey] = useState("")
  const {searchKey,setSearchKey} = useContext(searchContext)
  const [homeBooks,setHomeBooks] = useState([])
  console.log(homeBooks);
  useEffect(()=>{
    getHomeBooks()
  },[])
  
  const getHomeBooks =async() =>{
    const result = await getHomePageBooksAPI()
    // console.log(result);
    if(result.status==200){
    setHomeBooks(result.data)
    }
    else{
      console.log(result.data);
      
    } 
    
  }
  const navigate = useNavigate()

  const handleSearch = () =>{
  if(!searchKey){
  toast.warning("Please provide a book title here ...")
  }
  else if(!sessionStorage.getItem("token")){
     toast.warning("Please Login to search book!!")
     setTimeout(()=>{
      navigate('/login')
     },2500)
  }
  else if(sessionStorage.getItem("token") && searchKey){
  navigate('/book')
  }
  else{
  toast.error("Something went wrong!!!!!!!")
  }
  }
  return (
    <>
    <Header/>
    <div className=''>
      {/* landing  part -search */}
      <div style={{height:'600px'}} className='flex justify-center items-center flex-col bg-[url(/bg-img.jpg)] bg-cover bg-top text-white'>
            <div style={{height:'600px',backgroundColor:'rgba(0, 0, 0, 0.48)'}} className='w-full flex justify-center items-center flex-col '>
         <h1 className="text-5xl font-bold mb-2">Wonderful Gifts</h1>
         <p>Gift your family and friends a book</p>
         {/* search */}
         <div className="mt-9 flex">
          <input onChange={e=>setSearchKey(e.target.value)} type="text" className='bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2 ' placeholder='Search book here ' />
          <button onClick={handleSearch} className='text-gray-500' style={{marginLeft:'-40px'}}>
            <FaSearch/>
          </button>
         </div>
      </div>
      </div>
      {/* new arrival */}
      <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
      <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
      <h2 className="text-2xl">Explore Our Latest Collections</h2>
      {/* book row and col */}
      <div className="md:grid grid-cols-4 w-full mt-10 ">
        {
          homeBooks?.length>0?
          homeBooks?.map(book=>(
          <div key={book?._id} className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
          <img width={'300px'} height={'300px'} src={book?.imageURL} alt="book" />
          <div className="flex flex-col justify-center items-center mt-4">
            <h3 className="text-blue-600 font-bold text-lg">{book?.author}</h3>
            <h4 className="title-lg">{book?.title}</h4>
            <h4>$ {book.discountPrice}</h4>
          </div>
        </div>
          ))
          :
          <p className='font-bold'>Loading.......</p>
        }
        
      </div>
      {/* all book - link */}
      <div className="text-center mt-20">
        <Link to={'/book'} className='p-2 bg-blue-600 text-white'>Explore More...</Link>
      </div>
      </section>
      {/* author */}
      <section className='md:px-40 p-5 my-5 md:grid grid-cols-2 items-center'>
        {/* author content */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">FEATURED AUTHORS</h1>
          <h2 className="text-xl">Captivates With Every Words</h2>
          <p className='text-justify mt-9'>The author is a dedicated writer with a deep love for storytelling and literature. Their works blend imagination, emotion, and carefully crafted characters that stay with the reader long after the story ends. With years of experience exploring different genres, the author has developed a unique writing style that captures both the heart and mind of the reader. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste praesentium et nisi rem earum. Nihil reprehenderit id suscipit laboriosam nobis voluptate tempore officia, harum veritatis cumque eveniet omnis itaque?</p>
          <p className='text-justify mt-5'>Beyond writing, the author believes that books have the power to inspire, educate, and transform lives. Every story is created with the intention of offering readers a meaningful experience—one that encourages reflection, sparks curiosity, and invites them into new worlds. The author continues to write with passion, hoping to connect with readers of all ages through the magic of words.</p>
        </div>
        {/* author image */}
        <div className="p-5 flex justify-center items-center">
           <img className='w-90' src="https://i.pinimg.com/736x/21/fb/1b/21fb1bfe224f49b0650659862c3ad020.jpg" alt="author" />
        </div>
       
      </section>
      {/* testimony */}
      <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
      <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
      <h2 className="text-2xl">See What Others Are Saying</h2>
      <div className="my-5 flex justify-center items-center flex-col">
        {/* user img */}
        <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="person" />
        {/* feedback */}
        <p className='mt-5'>Lucas Alexander</p>
        <p className="text-justify mt-4"><span className='font-bold me-2'>"Amazing stories await you in this book, capturing your imagination from the very first page"</span>The writing is clear and easy to follow, and the author has done an excellent job of building strong characters and a meaningful storyline. The plot moves at a good pace, keeping the reader interested throughout. What I liked most is how the book blends emotion with real-life lessons, making it both enjoyable and thought-provoking. Overall, it’s a well-written book that leaves a lasting impression and is definitely worth reading.Another standout element of the book is the way it connects with the reader on a personal level. The themes are relatable, and the author’s message is delivered in a meaningful and impactful way. The book encourages you to reflect on your own experiences, making the reading journey both enjoyable and enriching. Overall, it’s a well-crafted work that stays with you even after you finish reading."</p>
      </div>
      </section>
    </div>
    <Footer/>
     {/* toast */}
       <ToastContainer
    position="top-center"
    autoClose={2000}
    theme="colored"
    />
    </>
 
  )
}

export default Home