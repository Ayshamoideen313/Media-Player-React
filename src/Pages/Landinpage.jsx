import React from 'react'
import {Button,Col,Row,Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Landinpage() {

const navigateByUrl=useNavigate()

  return (
    <>
    {/* div 1 */}
    <div style={{marginTop:"100px"}}>
        <Row className="mt-5 d-flex align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5} className='text-center  '>
        <h1 className=' text-center text-success mt-3'>Welcome to<span className='text-danger'> Media_Player</span></h1>
        <p className=' mt-3  'style={{textAlign:"justify"}} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi corporis magni alias quis sequi minima cum debitis, aperiam, ab voluptates molestias a! Tempore odio reprehenderit exercitationem harum quibusdam, numquam consectetur.
        Ratione aliquam pariatur minus quia illo! Veniam vero amet commodi repellat deleniti quibusdam ipsa omnis error temporibus earum, odit reiciendis suscipit minus? Officiis aspernatur iste error. Delectus praesentium fuga ratione.
       </p> 
       <Button onClick={()=>navigateByUrl('/home')} className='btn mt-3 '>Get Started</Button>
       </Col>
       <Col></Col>
        <Col lg={4}>
        <img className='border border-secondary rounded shadow  mt-5 w-100 h-100'
              src=' https://i.pinimg.com/originals/ec/8d/da/ec8dda885688ef35203135cc247e2259.gif'

         />
       </Col>
        <Col></Col>
        </Row>
        </div>
    {/* div 2 */}

<div className='container my-5 d-flex flex-column align-items-center justify-content-center' >
<h1 className='text-success my-5'>Features</h1>
<div className='cards my-5 d-flex align-items-center justify-content-between w-100'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" 
            src="https://i.pinimg.com/originals/0c/5d/03/0c5d03db770f125d9cdc5048a4c6a16d.gif" alt="" 
            width="300px" height="300px"

       />
      <Card.Body>
        <Card.Title className='text-primary my-3'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    {/* card2 */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"
      src="https://i.pinimg.com/originals/f4/df/f0/f4dff05ee04916b7812adfaf81c29f3e.gif"
      width="300px" height="300px"
        />
      <Card.Body>
        <Card.Title className='text-primary my-3'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    {/* card 3 */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"
       src="https://phoneky.co.uk/thumbs/screensavers/down/music/live4music_h6bwni57.gif"
width="300px" height="300px"
       />
      <Card.Body>
        <Card.Title className='text-primary my-3'>Categorised video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
</div>


</div>
    {/* div 2 */}

<div className='container border rounded p-4 border-light mt-5 d-flex justify-content-around align-items-center'>
<div className="col-lg-5 mt-5">
  <h4 className='text-primary fs-3'>Simple, Powerfull & Fast</h4>
  <h6 className='my-4'> <span className='text-danger'> Play Everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam, aliquam enim reprehenderit nesciunt adipisci aut eligendi beatae, veritatis porro praesentium est minus quam non earum deleniti iusto vel! Sequi!</h6>
  <h6 className='my-4'><span className='text-danger'>Categorize videos :</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque sunt impedit esse! Quam, excepturi aliquid minima libero pariatur ratione deleniti aspernatur corporis beatae quas, alias impedit doloremque autem quidem explicabo.</h6>
  <h6 className='my-4'><span className='text-danger'>Managing Videos :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur odit mollitia voluptates, temporibus libero eveniet, asperiores dolor ex, aliquam esse porro sapiente quas quibusdam vel deleniti natus corrupti delectus!</h6>

</div>



<div className="col-lg-6">
<iframe width="560" height="315" src="https://www.youtube.com/embed/V-skhp_Rv44?si=tpsJIMvLCMvcS7RV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referRerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
</div>

</div>

</> 
  )
}

export default Landinpage

