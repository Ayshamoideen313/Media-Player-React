import React from 'react'
import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import {FloatingLabel }from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { uploadVideoAPI } from '../services/allAPI';


function Add({setuploadVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // to store uploading vdo details
  const[uploadVideo,setuploadVideo] =useState({id:"",title:"",url:"",link:""})
console.log(uploadVideo);

const getYouTubeLink=(e)=>{
const {value}=e.target
// console.log(value);
if(value.includes('v='))
{
  let VID=value.split('v=')[1].slice(0,11)
  setuploadVideo({...uploadVideo,link:`http://www.youtube.com/embed/${VID}`})
 }
else{
  setuploadVideo({...uploadVideo,link:""})

}

}

const handleAdd=async()=>{
  const {id,title,url,link}=uploadVideo
  if(!id ||!title ||!url ||!link )
  {
alert("Please Fill Misssing Fields")
  }

  else{
    // upload vdos to json server
const result=await uploadVideoAPI(uploadVideo)
console.log(result);
if(result.status>=200 && result.status<300)
{
  alert("Video UPloaded")
  handleClose()
  setuploadVideo({id:"",title:"",url:"",link:""})
  setuploadVideoResponse(result.data)
}
else{
  alert(result.message)
}

  }
}



  return (
    <div>
      <div className='d-flex my-5 align-items-center border rounded border-secondary p-2'>
        <h5 className='text-success ms-2'>Upload Videos</h5>
        <Button onClick={handleShow} className='btn  mx-2'><i className="fa-solid fa-upload fa-bounce text-light"></i></Button>
      
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
<Form>
      <FloatingLabel className='' controlId="floatingtext1" label="Video Id">
        <Form.Control type="text" placeholder="Video Id"  className='mb-3  '
        onChange={(e)=>setuploadVideo({...uploadVideo,id:e.target.value})}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingtext2" label="ideo Name">
        <Form.Control type="text" placeholder="Video Name " className='mb-3 '
                onChange={(e)=>setuploadVideo({...uploadVideo,title:e.target.value})}

        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingtext3" label="Image Url">
        <Form.Control type="text" placeholder="Image Url" className='mb-3 '
                onChange={(e)=>setuploadVideo({...uploadVideo,url:e.target.value})}

        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingtext4" label="Video Url">
        <Form.Control type="text" placeholder="Video Url" className='mb-3 '
                onChange={getYouTubeLink}

        />
      </FloatingLabel>

      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
}

export default Add
