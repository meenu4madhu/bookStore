import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { FaPen, FaUser } from 'react-icons/fa'

function AdminProfile() {
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
                    <input type="file" id="uploadimg" hidden />
                    <img width={'150px'} height={'150px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="person" />
       
                  </label>
                  <button style={{marginTop:'-20px'}} className='bg-yellow-300 p-2 text-white rounded'><FaPen/>
                  </button>
               
                  
                  {/* name */}
                  <div className="mt-10 mb-3 w-full px-5">
                    <input type="text" placeholder='Username' className=' bg-white p-2 rounded w-full' />
                  </div>
                  {/* pswd */}
                   <div className=" mb-3 w-full px-5">
                    <input type="password" placeholder='New Password' className='bg-white p-2 rounded w-full' />
                  </div>
                  {/* confirm pwd */}
                   <div className=" mb-3 w-full px-5">
                    <input type="password" placeholder='confirm  Password' className='bg-white p-2 rounded w-full' />
                  </div>
                 
                  {/* button */}
                      <div className=" mb-3 flex justify-center px-5 mt-5">
                    <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:text-red-600 hover:border-red'>RESET</button>
                   <button className='px-3 py-2 rounded border bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border-green ms-3'>UPDATE</button>
                  
        </div>
      </div>
    </div>
  </div>
</div>
    
<Footer/>
</>
  )
}

export default AdminProfile