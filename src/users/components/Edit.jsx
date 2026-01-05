import React, { useEffect, useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import serverURL from '../../services/serverURL'
import { ToastContainer, toast } from 'react-toastify';
import { editUserAPI } from '../../services/allAPI';
import {useNavigate} from 'react-router-dom'

function Edit() {
  const [offCanvasStatus,setoffCanvasStatus]= useState(false)
  const [userDetails,setUserDetails]= useState({
    id:"",username:"",password:"",role:"",bio:"",picture:""
  })
  const [confirmPassword,setConfirmPassword]=useState("")
  const [existingPicture,setExistingPicture]=useState("")
  const [preview,setPreview]=useState('')
  const [passwordMatch,setPasswordMatch]=useState(true)
  const navigate = useNavigate()
  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio})
      setExistingPicture(user.picture)
    }
  },[])
  const handleUploadPicture = (imgFile)=>{
setUserDetails({...userDetails,picture:imgFile})
const url = URL.createObjectURL(imgFile)
setPreview(url)
  }
  const checkPasswordMatch =(data)=>{
    setConfirmPassword(data)
    userDetails.password==data?setPasswordMatch(true):setPasswordMatch(false)
  }
  const resetForm = ()=>{
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio,password:""})
    setExistingPicture(user.picture)
    setPreview("")
    setConfirmPassword("")
    setPasswordMatch(true)
  }
  const handleUpdate=async()=>{
    const {username,password,bio,role,id,picture}=userDetails
    if(!username || !password || !bio ||!confirmPassword){
    toast.info("Please fill all the fields!!")
    }
    else{
  const token = sessionStorage.getItem("token")
  if(token)
  {
    const reqHeader = {
    "Authorization": `Bearer ${token}`
     }
  
  const reqBody = new FormData()
  for(let key in userDetails){
    if(key!="picture")
    {
      reqBody.append(key,userDetails[key])
    }
    else{
    preview ? reqBody.append("picture",userDetails.picture):reqBody.append("picture",existingPicture)
    }
  }

  const result = await editUserAPI(id,reqBody,reqHeader)
  if(result.status==200)
  {
    toast.success("Profile Updated Successfully..........Please login with new password...")
  setTimeout(() => {
    navigate('/login')
  }, 2000);
  }else{
      console.log(result);
      toast.error("Something went wrong!!!")
    }
      
    }
  }
}

  return (
    <div>
        <button onClick={()=>setoffCanvasStatus(true)} className='flex items-center  text-blue-600 border  p-2 rounded hover:text-white hover:bg-blue-600'>Edit <FaEdit className='ms-3'/></button>
        {/* offcanvas */}
        {
          offCanvasStatus &&
       
        <div>
            <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full">
            </div>
            <div className="bg-white h-full w-90 fixed z-52 top-0 left-0">
                {/* header */}
                <div className="bg-black p-3 flex justify-between text-white ">
                <h3 className="text-xl">Update Profile</h3>
                <button onClick={()=>setoffCanvasStatus(false)}><FaX/></button>
                </div>
                {/* body */}
                <div className="flex justify-center items-center flex-col mb-5 mt-10">
                  {/* image */}
                  
                  <label htmlFor="uploadimg">
                    <input onChange={e=>handleUploadPicture(e.target.files[0])} type="file" id="uploadimg" hidden />
                    {    existingPicture ?
                     <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src={preview?preview:existingPicture.startsWith("https://lh3.googleusercontent.com/")?existingPicture:`${serverURL}/uploads/${existingPicture}`} alt="person" />
                    
                    :            
                        <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src={preview?preview:"https://www.shutterstock.com/image-vector/add-user-icon-plus-sign-600nw-2675411167.jpg"} alt="person" />
                    }
                    <FaPen className='ms-25 text-red-700 text-2xl' style={{marginTop:'-30px'}}/>
                  </label>
               
                  
                  {/* name */}
                  <div className="mt-10 mb-3 w-full px-5">
                    <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username' className='border border-gray-200 p-2 rounded w-full' />
                  </div>
                  {/* pswd */}
                   <div className=" mb-3 w-full px-5">
                    <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder='New Password' className='border border-gray-200 p-2 rounded w-full' />
                  </div>
                  {/* confirm pwd */}
                   <div className=" mb-3 w-full px-5">
                    <input value={confirmPassword} onChange={e=>checkPasswordMatch(e.target.value)} type="password" placeholder='confirm  Password' className='border border-gray-200 p-2 rounded w-full' />
                  </div>
                 { 
                 !passwordMatch&&
                  <div className="mb-3 w-full px-5 font-bold text-red-600 text-xs">
                    *Confirm password must match with new password
                  </div>}
                  {/* bio */}
                      <div className=" mb-3 w-full px-5">
                    <textarea value={userDetails.bio} onChange={e=>setUserDetails({...userDetails,bio:e.target.value})} type="text" placeholder='Bio'  className='border border-gray-200 p-2 rounded w-full' />
                  </div>
                  {/* button */}
                      <div className=" mb-3 flex justify-end px-5 mt-5">
                    <button onClick={resetForm} className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:text-red-600 hover:border-red'>RESET</button>
                   <button onClick={handleUpdate} className='px-3 py-2 rounded border bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border-green ms-3' disabled={!passwordMatch?true:false}>Update</button>
                  
                  </div>
                </div>
            </div>
        </div>
         }
         <ToastContainer
         position="top-center"
         autoClose={2000}
         theme="colored"
         />
    </div>
  )
}

export default Edit