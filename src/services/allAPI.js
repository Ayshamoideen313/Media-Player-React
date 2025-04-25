import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";


// UPload video API

export const uploadVideoAPI=async(video)=>
{
return await commonAPI('POST',`${server_url}/allVideos`,video)
}

// get all Upload vedio API

export const getAllUploadVideoAPI=async()=>
    {
    return await commonAPI('GET',`${server_url}/allVideos`,"")
    }
// get a vdo api from allvideos to category
export const getAVideoAPI=async(id)=>
   {
   return await commonAPI('GET',`${server_url}/allVideos/${id}`,"")
   }


 //  Delete Video API
 export const deleteVideoAPI=async(id)=>
    {
    return await commonAPI('DELETE',`${server_url}/allVideos/${id}`,{})
    }

   //  
// add History API
export const addHistoryAPI=async(video)=>
{
return await commonAPI('POST',`${server_url}/history`,video)
}

// get History API
export const getHistoryAPI=async()=>
   {
   return await commonAPI('GET',`${server_url}/history`,"")
   }

// delete History API   
export const removeHistoryAPI=async(id)=>
{
   return await commonAPI('DELETE',`${server_url}/history/${id}`,{})
}

// addCategoryAPI 

export const addCategoryAPI =async(category)=>
{
   return await commonAPI('POST',`${server_url}/category`,category)
}

// getCategoryAPI 

export const getCategoryAPI =async()=>
   {
      return await commonAPI('GET',`${server_url}/category`,"")
   }

   // dileteCategoryAPI 

export const deleteCategoryAPI =async(id)=>
   {
      return await commonAPI('DELETE',`${server_url}/category/${id}`,{})
   }
   getCategoryAPI 
// update cattegory
export const updateCategoryAPI =async(id,categoryDetails)=>
   {
      return await commonAPI('PUT',`${server_url}/category/${id}`,categoryDetails)
   }
