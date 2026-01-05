import React,{useState,useEffect} from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { FaPen, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import serverURL from '../../services/serverURL'
import { editUserAPI } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';


function AdminProfile() {

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
      if(!username || !password  ||!confirmPassword){
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
      if(key != "picture")
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
    <>
    <AdminHeader/>
    <div className="md:grid grid-cols-5">
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className="col-span-4 p-10">
        <h1 className="text-center my-5 font-bold text-3xl">Settings</h1>
        <div className="md:grid grid-cols-2 items-center mt-10 gap-10">
          {/* text */}
          <div>
            <h2 className="text-xl font-bold mb-5">Welcome to the  Admin Settings Panel. </h2>
            <p className="text-justify mb-5">Here, you can customize system preference,manage account details, configure business settings,and ensure the platform runs 
              smoothly for both users and staff. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam accusamus at, perferendis quo nemo dolorum fugiat autem labore soluta maxime necessitatibus odit harum. Animi eum rerum minus blanditiis non.
              Quam porro optio soluta doloribus suscipit doloremque, exercitationem ducimus quae laudantium iure ratione commodi perspiciatis reprehenderit consequuntur quas dicta, nesciunt eveniet in, sequi numquam dolore maiores. Ad repudiandae maiores ipsam?
              Voluptatum eaque qui necessitatibus reprehenderit dicta minima! Quos atque optio quisquam nisi dignissimos, enim totam corporis delectus quia sequi officia eos architecto, in natus aliquid cum saepe quaerat quasi repudiandae!</p>
         <p className="font-bold mb-2">👤 Account Settings</p>
          
          <ul>
            <li>Profile Information : Update admin name,email,phone number,and profile picture</li>
            <li>Login Credentials: Change password or enable Two-Factor Authentication(2FA) for secure access. </li>
            <li>Activity Logs: View login history, last login time,and device access details.</li>
          </ul>
          </div>
          {/* form */}
           <div className="flex justify-center items-center flex-col bg-blue-100 p-5">
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
                    <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username' className='border border-gray-800 p-2 rounded w-full' />
                  </div>
                  {/* pswd */}
                   <div className=" mb-3 w-full px-5">
                    <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder='New Password' className='border border-gray-800 p-2 rounded w-full' />
                  </div>
                  {/* confirm pwd */}
                   <div className=" mb-3 w-full px-5">
                    <input value={confirmPassword} onChange={e=>checkPasswordMatch(e.target.value)} type="password" placeholder='confirm  Password' className='border border-gray-800 p-2 rounded w-full' />
                  </div>
                 { 
                 !passwordMatch&&
                  <div className="mb-3 w-full px-5 font-bold text-red-600 text-xs">
                    *Confirm password must match with new password
                  </div>}
                 
                  {/* button */}
                      <div className=" mb-3 flex justify-center px-5 mt-5">
                    <button onClick={resetForm} className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:text-red-600 hover:border-red'>RESET</button>
                   <button onClick={handleUpdate} className='px-3 py-2 rounded border bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border-green ms-3'disabled={!passwordMatch?true:false}>UPDATE</button>
                  
        </div>
      </div>
    </div>
  </div>
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

export default AdminProfile