import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <>
    <div className='flex justify-center items-center flex-col my-10'>
     <img width={'500'} src="pnf.gif" alt="pnf" />
     <p className='text-xs'>Oh No !</p>
     <h1 className='text-2xl my-3 font-bold'>Look Like You're Lost</h1>
     <p className='text-xs'>The page you are looking for is not available</p>
     <Link to={'/'} className='type:button my-5 text-white bg-blue-400 p-3 rounded'>Back Home</Link>
    </div>
    </>
  )
}

export default Pnf