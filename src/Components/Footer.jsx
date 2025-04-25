import React from 'react'
import { Container,Button ,Row,Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Footer() {
  return (
    <div>
            <hr className='text-primary'style={{marginTop:"200px"}} />
            <hr className='text-primary ' />

      <Container >
        <Row className='' >
           <Col>
               <h5 className='text-start text-light'><i class="fa-solid fa-play me-2"></i>Media_Player</h5>
               <p>Lorem ipsum dolor sit  elit. Aliquami alias laboriosam exercitationem veniam. Adipisci vel eos enim ?</p>
               <p>consectetur? ametwrs, inventore? </p>
           </Col>

           <Col>
                <h5 className='text-start ms-3 text-light'> Link</h5>
                <ul>
                    <li>Landingpage</li>
                    <li>Homepage</li>
                    <li>Watchhistory</li>
                </ul>
           </Col>
           <Col>
               <h5 className='text-start ms-3 text-light'>Guide</h5>
               <ul>
                 <li>React</li>
                 <li>React Bootsrap</li>  
                 <li>Bootswatch</li>
               </ul>
           </Col>
           <Col>
              <h5 className='text-start text-light'>Contact Us</h5>
              <InputGroup className="mb-3">
        <Form.Control
          placeholder="Send Feed Back"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant=" bg-primary text-light" id="button-addon2">
          Send
        </Button>
      </InputGroup>
              <div className='text-center'>
              <i class="fa-brands fa-square-twitter text-light mx-2"></i>
              <i class="fa-brands fa-facebook text-light mx-2 "></i> 
              <i class="fa-solid fa-envelope text-light mx-2"></i> 
              <i class="fa-brands fa-square-instagram text-light mx-2"></i>
                </div>
           </Col>

        </Row>

        <hr className='text-primary'style={{marginTop:"10px"}} />


        <Row class="text-center mb-3">
          Copyright @ 2024 Media_Player .Built with React
        </Row>

      </Container>
    </div>
  )
}

export default Footer

