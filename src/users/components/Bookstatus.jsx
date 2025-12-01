import React from 'react'

function Bookstatus() {
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
        {/* book div duplicate */}
        <div className="bg-gray-200 p-5 rounded">
            <div className="md:grid grid-cols-[3fr_1fr]">
          <div>
            <h2 className="text-2xl">Title</h2>
            <h3 className="text-xl">Author</h3>
            <h4 className="text-lg text-red-500">$ 400</h4>
            <p className="text-justify">Abstract</p>
            
            <div className="flex  mt-5">
                {/* pending */}
                <img className='w-40' src="/pending.png" alt="pending" />
                {/* approved */}
                <img className='w-50 ' src="/approved.png" alt="approved" />
                {/* sold */}
                <img className='w-30 ms-3'  src="/sold.png" alt="" />
            </div>
            </div>
            
      <div className="px-4 mt-4 md:mt-0">
        <img className='w-100' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" 
        alt="book" />
        <div className="flex justify-end">
          <button className='p-2 bg-red-600 text-white mt-5'>DELETE</button>
       </div>
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default Bookstatus