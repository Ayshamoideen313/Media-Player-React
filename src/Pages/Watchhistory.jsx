import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { getHistoryAPI } from '../services/allAPI'
import { removeHistoryAPI } from '../services/allAPI'


function Watchhistory() {
const [history,setHistory]=useState([])

const getHistory=async ()=>{
  const result=await getHistoryAPI()
  // console.log(result);

// data got in result next want to display

if(result.status==200)
{
  setHistory(result.data)
}
  else{
    console.log("API FAILED");
    setHistory([])
    
  }
}



console.log(history);

const removeHistory=async(id)=>{
 await removeHistoryAPI(id)
 getHistory()
}

useEffect(()=>{
  getHistory()
},[])


  return (
    <div>
     <div className='container  d-flex justify-content-between my-5'>
      <h1 className='text-success '>Watch-History</h1>
     <Link className='border border-secondary p-2 rounded' style={{textDecoration:"none"}} to={"/home"}><i class="fa-solid fa-arrow-left fa-beat-fade mx-4"></i> Back To Home</Link> 
     </div>

<table className='my-3 container shadow  '> 
  <thead className='my-2'>
    <tr className='p-2'>
      <th className='p-1'>#</th>
      <th className='p-1'>Video title</th>
      <th className='p-1'>Url</th>
      <th className='p-1'>TimeStamp</th>
      <th className='p-1'>Action</th>
    </tr>
  </thead>

  <tbody className='my-4 '>
  {
history?.length>0?history.map((video,index)=>(

    <tr className='my-2'>
      <td>{index+1}</td>
      <td>{video.title}</td>
      <td><a style={{textDecoration:"none"}} href="{video.link}">{video.link}</a></td>
      <td>{video.timeStamp}</td>
      <td><button onClick={(e)=>removeHistory(video?.id)}  className='btn btn-link'><i class="fa-solid fa-trash fa-beat-fade"></i></button>
      </td>
    </tr>)): <p className='text-danger fw-bolder'>Noting to display</p>
  }</tbody>
</table>

    </div>
  )
}

export default Watchhistory


