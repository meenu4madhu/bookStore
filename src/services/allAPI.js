import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// reg api :called by auth component when register btn clicked
export const registerAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/register`,userDetails)

}