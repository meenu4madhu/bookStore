import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {routeGuardContext} from '../contextAPI/GuardContext'

function Pnf() {
  const{role,authorised}=useContext(routeGuardContext)
  const navigate =useNavigate()
  const backHome=()=>{
    if(authorised){
    role=='user'?  navigate('/') : navigate('/admin/home')
    }
    else{
     navigate('/')
    }
  }
  return (
    <>
    <div className='flex justify-center items-center flex-col my-10'>
     <img width={'500'} src="pnf.gif" alt="pnf" />
     <p className='text-xs'>Oh No !</p>
     <h1 className='text-2xl my-3 font-bold'>Look Like You're Lost</h1>
     <p className='text-xs'>The page you are looking for is not available</p>
     <button onClick={backHome} className='type:button my-5 text-white bg-blue-400 p-3 rounded'>Back Home</button>
    </div>
    </>
  )
}

export default Pnf