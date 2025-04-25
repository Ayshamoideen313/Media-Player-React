import React from 'react'
import { Button ,Card,Modal} from 'react-bootstrap'
import { useState } from 'react';
import { addHistoryAPI, deleteVideoAPI } from '../services/allAPI';



function Videocard({video,setdeleteVideoResponse,insideCategory}) {
// to function modal its imp
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true);

const {title,link}=video
// to get time history
let today= new Date();
console.log(new Intl.DateTimeFormat("en-US",{year:"numeric",
  month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}
).format(today));

let timeStamp=new Intl.DateTimeFormat("en-US",{year:"numeric",
  month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}
).format(today)
// assign all dtas to a objct
const videoHistory={title,link,timeStamp}
// make an API Call
await addHistoryAPI(videoHistory)

  }
const removeVideo=async(id)=>{
  await deleteVideoAPI(id)
  setdeleteVideoResponse(true)
}
const dragStart=(e,id)=>{
  console.log("darggerd started "+ id);
  e.dataTransfer.setData("videoId",id)
  
}

  return (
    <div>
      <>
      {/* modal trigger is a image here */}
      <Card style={{ width: '16rem', marginTop:'20px' }}
       draggable onDragStart={e=>dragStart(e,video?.id)}>

      {/* <Card.Img variant="top" 
      onClick={handleShow} width="150px" height="150px"
       src={video.url} /> */}

<Card.Img
  variant="top"
  onClick={(e) => {
    e.preventDefault(); // prevent any default behavior like page reload
    handleShow();
  }}
  width="150px"
  height="150px"
  src={video.url}
/>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
           <h4>{video.title}</h4>
         {insideCategory?null:   
            <Button onClick={()=>removeVideo(video?.id)} variant="btn btn-link primary"><i className="fa-solid fa-trash fa-beat-fade"></i></Button>
        } 

          </Card.Title>
        
      </Card.Body>
    </Card>

{/* modal body  */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>{video.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
{/* modalbody text to play video */}
<iframe width="100%" height="350px" 
src={`${video.link}?autoplay=1`}
// src={`${video.link}?autoplay=1`}
 title="YouTube video player" frameborder="0" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
 referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
       
        
        </Modal.Body>
        
      </Modal>

      </>
    </div>
  )
}

export default Videocard
