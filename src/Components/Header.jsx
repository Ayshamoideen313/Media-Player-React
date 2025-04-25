import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar className="bg-primary ">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{textDecoration:'none',color:"white",fontWeight:'30px'}}>
          <i className="fa-solid  fa-play fa-fade fs-4 mx-5"></i>    {/* <i class="fa-solid fa-play fa-beat-fade" style="color: #63E6BE; "></i> */}
            Media-Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
