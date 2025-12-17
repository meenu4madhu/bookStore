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
export const getAllBooksPageAPI = async (reqHeader)=>{
return await commonAPI("GET",`${serverURL}/books/all`,{},reqHeader)
}
// /user-books/all : called by bookstatus when page load - authorized user
export const getAllUserBooksAPI = async (reqHeader)=>{
return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}