import React, { useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
  const [offCanvasStatus,setoffCanvasStatus]= useState(false)
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
                    <input type="file" id="uploadimg" hidden />
                    <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="person" />
                    <FaPen className='ms-25 text-red-700 text-2xl' style={{marginTop:'-30px'}}/>
                  </label>
               
                  
                  {/* name */}
                  <div className="mt-10 mb-3 w-full px-5">
                    <input type="text" placeholder='Username' className='border border-gray-200 p-2 rounded w-full' />
                  </div>
                  {/* pswd */}
                   <div className=" mb-3 w-full px-5">
                    <input type="password" placeholder='New Password' className='border border-gray-200 p-2 rounded w-full' />
                  </div>
                  {/* confirm pwd */}
                   <div className=" mb-3 w-full px-5">
                    <input type="password" placeholder='confirm  Password' className='border border-gray-200 p-2 rounded w-full' />
                  </div>
                  {/* bio */}
                      <div className=" mb-3 w-full px-5">
                    <textarea type="text" placeholder='Bio'  className='border border-gray-200 p-2 rounded w-full' />
                  </div>
                  {/* button */}
                      <div className=" mb-3 flex justify-end px-5 mt-5">
                    <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:text-red-600 hover:border-red'>RESET</button>
                   <button className='px-3 py-2 rounded border bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border-green ms-3'>SUBMIT</button>
                  
                  </div>
                </div>
            </div>
        </div>
         }
    </div>
  )
}

export default Edit