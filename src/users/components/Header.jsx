import React, { useEffect, useState ,useContext} from 'react'
import { FaAddressCard, FaFacebook, FaInstagram, FaPowerOff, FaTwitter, FaUser } from 'react-icons/fa'
import { FaBars, FaXTwitter } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import serverURL from '../../services/serverURL'
import { routeGuardContext } from '../../contextAPI/GuardContext'

function Header() {
  const {role,setAuthorised}=useContext(routeGuardContext)
  const [listStatus,setlistStatus]=useState(false)
  const [dp,setDp]=useState("")
  const [token,setToken]= useState("")
  const [dropDown,setDropDown] = useState(false)
  const navigate = useNavigate()
  console.log(dp);
  
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
    setToken(userToken)
    const user = JSON.parse(sessionStorage.getItem("user"))
    setDp(user.picture)
    }
  },[token])

  const logout =()=>{
    sessionStorage.clear()
    setAuthorised(false)
    setToken("")
    setDp("")
    setDropDown(false)
    setlistStatus(false)
    navigate('/')

  }

  const menubtnClicked=()=>{
    setlistStatus(!listStatus)
  }
  return (
    <>
    {/* upper-title login  */}
    <div className='grid grid-cols-3 p-3'>
     {/* logo with title */}
     <div className="flex items-center">
      <img width={'100px'} height={'100px'} src="https://img.pikbest.com/png-images/20241012/book-icon-vector-design_10954004.png!sw800" alt="logo" />
      <h1 className="text-2xl font-bold ms-1 md:hidden">BOOKSTORE</h1>
     </div>
     {/* title */}
     <div className="md:flex justify-center items-center hidden">
      <h1 className="text-3xl font-bold">
        BOOK STORE
      </h1>
     </div>
     {/* LOGIN */}
     <div className="md:flex justify-end items-center hidden">
      <FaInstagram/>
      <FaFacebook className='mx-2'/>
      <FaXTwitter/>
      {/* login  link  */}
    {
           !token ?
            <Link to={'/login'} className='flex border rounded px-2 py-1 justify-center hover:bg-black hover:text-white ms-1'><FaUser className='me-1'/> Login</Link>
           :
    <div className="relative inline-block text-left ms-2">
    <button onClick={()=>setDropDown(!dropDown)} className="w-full bg-white px-3 py-2 shadow-xs hover:bg-gray-200">
    <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} src={dp?dp.startsWith("https://lh3.googleusercontent.com/") ?dp:`${serverURL}/uploads/${dp}`:"https://png.pngtree.com/png-vector/20211007/ourmid/pngtree-casual-stylish-fashionable-people-icon-in-flat-style-png-image_3974718.png"} alt="profile pic" />
    </button>
    {
       dropDown &&
      <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right
       ring-1 ring-black/5 focus:outline-hidden">
      <Link to={'/user/profile'} className=' px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>
      <button onClick={logout} className=' px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
    </div>
    }
    </div>

    }
  
   


      </div>
    </div>
   {/* lower part link& menu + login button */}
   <nav className="w-full p-2 bg-black text-white md:flex justify-center items-center">
    {/* div - menubar login btn */}
    <div className="flex justify-between items-center text-2xl md:hidden">
      {/* menu bar btn */}
      <button onClick={menubtnClicked}><FaBars/></button>
      {/* login link */}
      {
           !token ?
            <Link to={'/login'} className='flex border rounded px-2 py-1 justify-center hover:bg-black hover:text-white ms-1'><FaUser className='me-1'/> Login</Link>
           :
    <div className="relative inline-block text-left ms-2">
    <button onClick={()=>setDropDown(!dropDown)} className="w-full bg-white px-3 py-2 shadow-xs hover:bg-gray-200">
    <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} src={dp?dp:"https://png.pngtree.com/png-vector/20211007/ourmid/pngtree-casual-stylish-fashionable-people-icon-in-flat-style-png-image_3974718.png"} alt="profile pic" />
    </button>
    {
       dropDown &&
      <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right
       ring-1 ring-black/5 focus:outline-hidden">
      <Link to={'/user/profile'} className=' px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>
      <button className=' px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
    </div>
    }
    </div>

    }
  
    </div>
    {/* ul-link */}
    <ul className={listStatus? "flex flex-col":"md:flex justify-center items-center hidden"}>
      <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'}>HOME</Link></li>
       <li className='md:mx-4 my-3 md:my-0'><Link to={'/book'}>BOOKS</Link></li>
        <li className='md:mx-4 mb-3 md:mb-0'><Link to={'/contact'}>CONTACT</Link></li>
    </ul>
   </nav>
    </>
  )
}

export default Header