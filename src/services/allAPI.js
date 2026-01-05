import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// reg api :called by auth component when register btn clicked
export const registerAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/register`,userDetails)

}
// login api :called by auth component when login btn clicked
export const loginAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/login`,userDetails)

}

// google/sign-in  google login api :called by auth component when login using google login btn clicked

export const googleLoginAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)

}

// /user/book/add  - addbook api - called by sellbook component when add book btn clicked
export const addBookAPI = async (reqBody,reqHeader)=>{
return await commonAPI("POST",`${serverURL}/user/book/add`,reqBody,reqHeader)
}

// homepage books api - called by home  
export const getHomePageBooksAPI = async ()=>{
return await commonAPI("GET",`${serverURL}/books/home`,{})
}

// /books/all : bookpage api - called by books component  when page loads -authorised user
export const getAllBooksPageAPI = async (reqHeader,searchKey)=>{
return await commonAPI("GET",`${serverURL}/books/all?search=${searchKey}`,{},reqHeader)
}
// /user-books/all : called by bookstatus when page load - authorized user
export const getAllUserBooksAPI = async (reqHeader)=>{
return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}

// user bought book api 
export const getAllUserBoughtBooksAPI = async (reqHeader)=>{
return await commonAPI("GET",`${serverURL}/user-books/bought`,{},reqHeader)
}

// /book/:id/view - view book api - called by view component when page loads

export const viewBookAPI = async (reqHeader,id)=>{
return await commonAPI("GET",`${serverURL}/books/${id}/view`,{},reqHeader)
}

// user/:id/edit :put request ''edit'' when update button clicked
export const editUserAPI = async(id,reqBody,reqHeader)=>{
return await commonAPI("PUT",`${serverURL}/user/${id}/edit`,reqBody,reqHeader)
}

// /admin-books/all : bookpage api - called by admin-resources component  when page loads -authorised user
export const getAllAdminBooksAPI = async (reqHeader)=>{
return await commonAPI("GET",`${serverURL}/admin-books/all`,{},reqHeader)
}

// /admin-users/all : userpage api - called by admin-resources-user component  when tag2 open
export const getAllAdminUsersAPI = async (reqHeader)=>{
return await commonAPI("GET",`${serverURL}/admin-users/all`,{},reqHeader)
}

// /put req by 
export const updateBookStatusAPI = async(id,reqHeader)=>{
return await commonAPI("PUT",`${serverURL}/books/${id}/update`,{},reqHeader)
}

// delete book
export const removeBookAPI = async(id,reqHeader)=>{
return await commonAPI("DELETE",`${serverURL}/books/${id}`,{},reqHeader)
}

// put req by view component when click buy button 
export const purchaseBookAPI = async(id,reqHeader)=>{
return await commonAPI("PUT",`${serverURL}/books/${id}/buy`,{},reqHeader)
}