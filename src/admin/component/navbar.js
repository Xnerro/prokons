import React, { Component } from 'react';
import logo from '../../img/azuraLogo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';

class NavComponent extends Component {
  render() {
    return (
      <div>
        <Navbar bg="secondary" variant="dark" className="head">
          <Container fluid="lg">
            <Navbar.Brand className="fw-bold" href="#home">
              <img src={logo} width="50px" className="me-4" />
              Kasir Azura
            </Navbar.Brand>
            <Nav className="float-end">
              <Nav.Link>
                Account
                <img
                  src="https://th.bing.com/th/id/OIP.vIq_QWTLmuEoct13lW83UwHaHa?pid=ImgDet&rs=1"
                  className="rounded-circle ms-2"
                  width="30px"
                  height="30px"
                />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavComponent;
