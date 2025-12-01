import React from 'react'

function Sellbook() {
  return (
   <div>
        <div className="p-10 my-20 mx-5 bg-gray-200">
            <h1 className="text-center text-3xl font-bold">Book Details</h1>
            <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Book Title' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Author' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='No of pages' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Orginal Price' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Discount Price' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Image URL' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <textarea type="text" rows={5} placeholder='Book Abstract' className="p-2 bg-white w-full rounded" />
                    </div>
                </div>
                <div className="px-3">
                     <div className="mb-3">
                        <input type="text" placeholder='Language' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Publisher' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='ISBN' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Category' className="p-2 bg-white w-full rounded" />
                    </div>
                    <div className="mb-3 flex justify-center items-center mt-10">
                        <label htmlFor="uploading">
                            <input type="file" id="uploading" hidden />
                            <img width={'200px'} src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="upload" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-5">
                <button className='bg-gray-600 text-white p-2 rounded me-5 hover:bg-white hover:text-blue-400'>RESET</button>
                <button  className='bg-blue-600 text-white p-2 rounded me-5 hover:bg-white hover:text-blue-400'>SUBMIT</button>
            </div>
        </div>
    </div>
  )
}

export default Sellbook