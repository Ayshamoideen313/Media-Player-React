import React, { useEffect } from 'react'
import { useState } from 'react';
import { Modal ,Button, Row, Col} from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import Videocard from './Videocard';

function Category({dropVideoResponse}) {
  const [show, setShow] = useState(false);
const[categoryName,setCategoryName]=useState("")
// to display categoty
const [allCategory,setAllCategory]=useState([])
// console.log(categoryName);

const handleAdd = async()=>{
  if(categoryName)
  {
    const result =await addCategoryAPI({categoryName,allVideo:[]})
    console.log(result);
    if(result.status>=200 && result.status<=300)
    {
      handleClose()
      setCategoryName("")
      getCategories()

    }
    else{
      console.log(result.message);
      
    }
  }else{
    alert("Please Fill the Missing Fields")
  }
}

// to display category fn and api call to get data
const getCategories = async () => {
  const { data } = await getCategoryAPI();
  setAllCategory(data);
 
};

  
console.log(allCategory);
useEffect(()=>{
  getCategories()
},[dropVideoResponse])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeCategory=async(id)=>{
await deleteCategoryAPI(id)
getCategories()
  }

  // drag and drop
const dragOver=(e)=>{
  console.log("video card drag over the category");
  e.preventDefault()
  
}
  const vidoeDrop=async(e,categoryId)=>{
    console.log("video dropped");
    const videoId=e.dataTransfer.getData("videoId")
    console.log("videoId "+videoId+" dropped into"+categoryId);
    const {data}=await getAVideoAPI(videoId)
    // console.log(data);
// to uplad vdo details added
const selectedCategory=allCategory.find(item=>item.id==categoryId)
selectedCategory.allVideo.push(data)
console.log(selectedCategory);
const res = await updateCategoryAPI(categoryId,selectedCategory)
console.log(res);

getCategories()
    
  }
 const  videoDragStarted=(e,videoId,categoryId)=>{
  let dataShare={videoId,categoryId}
  console.log(dataShare);
  e.dataTransfer.setData("data",JSON.stringify(dataShare))
  
 }




  return (
    <div>
      {/* trigger  */}
     <div className='d-grid' >
      <button onClick={handleShow} className='btn btn-success text-light mb-2'>Add Category</button>
     </div>
     {/* modal body */}
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
          onChange={e=>setCategoryName(e.target.value)}
           type="text" className='form-control my-3'  placeholder='Category Name'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  onClick={handleAdd}
          variant="primary">Create</Button>
        </Modal.Footer>
      </Modal>
{allCategory?.length>0?allCategory.map(Category=>(

  <div className='border rounded m-1 p-1'>
        <div className='d-flex justify-content-around  '
        droppable="true" onDragOver={e=>dragOver(e)}
        onDrop={e=>vidoeDrop(e,Category?.id)}
        >
          <h4>{Category?.categoryName}</h4>
          <Button onClick={(()=>removeCategory(Category.id))} variant="btn btn-link primary"><i className="fa-solid fa-trash fa-beat-fade"></i></Button>
        </div>
      
<Row>
{
  Category?.allVideo.length>0?Category?.allVideo.map(card=>(
    <Col sm={12} className='mb-2'
    draggable onDragStart={e=>videoDragStarted(e,card.id,Category.id)}
    >
      <Videocard video={card} insideCategory={true}/>
    </Col>
  )):null
}
</Row>
</div>

))
:<p className='text-danger fw-bolder'>Nothing to Display</p>

}
      


    </div>
  )
}

export default Category
