import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Videocard from '../Components/Videocard'
import { getAllUploadVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI';






function View({uploadVideoResponse,setDropVideoResponse}) {

const[allVideos,setAllVidoes] =useState([]);
// state lifting
const [deleteVideoResponse,setdeleteVideoResponse]=useState(false)



useEffect(()=>{
  getAllVideos()
  setdeleteVideoResponse(false)
},[uploadVideoResponse,deleteVideoResponse])

const getAllVideos =async()=>{

const result= await getAllUploadVideoAPI();
console.log(result);
if(result.status==200)
{
setAllVidoes(result.data);

}else{
  console.log("API FAILED");
  setAllVidoes([]);
}
}

// console.log(allVideos); //   array of data got
const dragOver=(e)=>{
  e.preventDefault()
  
}
const videoDropped=async(e)=>{
  const {videoId,categoryId}=JSON.parse(e.dataTransfer.getData('data'))
  console.log(videoId,categoryId);
  const {data}=await getCategoryAPI()
  const selectedCategory=data.find(item=>item.id==categoryId)
// console.log(selectedCategory);
let result=selectedCategory.allVideo.filter(video=>video.id!==videoId)
console.log(result);
let{id,categoryName}=selectedCategory
let newCategory={id,categoryName,allVideo:result}
console.log(newCategory);
 const res = await updateCategoryAPI(categoryId,newCategory)
 setDropVideoResponse(res);
 
// ----------


// --------


  
}


  return (


    <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>

      {
        allVideos?.length>0?allVideos.map(video=>(
       <Col className='ms-5' sm={12} md={4} lg={3}>
      <Videocard video={video} setdeleteVideoResponse={setdeleteVideoResponse}/>
      </Col>
        )):<p className='text-danger fw-bolder'>Nothing To Display</p>
}
      
    </Row>
  )
}

export default View
