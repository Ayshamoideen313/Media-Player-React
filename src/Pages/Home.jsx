import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import Category from '../Components/Category'
import View from '../Components/View'



function Home() {
// State Lifting 
const [uploadVideoResponse,setuploadVideoResponse]=useState({})
const [dropVideoResponse,setDropVideoResponse]=useState({})

  return (
    <>
    <div className='container my-4 d-flex justify-content-between'>
     <div className='add-videos'>
       <Add setuploadVideoResponse={setuploadVideoResponse}/>
     </div>
     <div className='mt-5'>
<Link className=' fs-3 text-success border  p-2 rounded ' to={'/watch-history'} style={{textDecoration:"none"}}>
<i class="fa-solid fa-clock-rotate-left fa-fade  bg-primary p-2 m-2 rounded text-light"></i>Watch-History
</Link></div>
    </div>

<div className='container-fluid my-4 w-100 row'>
<div className='all-videos col-lg-9'>
  <h1 className='text-primary ms-5'>All Videos</h1>
  <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
</div>
<div className='category col-lg-3'>
  <Category dropVideoResponse={dropVideoResponse}/></div>
</div>

</>)
}

export default Home
