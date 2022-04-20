import React, { Component } from 'react';
import logo from '../../img/azuraLogo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavComponentAdmin extends Component {
  render() {
    return (
      <Navbar bg="secondary" variant="dark" className="head">
        <Container fluid="lg">
          <Navbar.Brand
            className="fw-bolder d-flex"
            onClick={this.props.onCloseUserMenu}
          >
            <img src={logo} width="50px" className="me-2" />
            <Nav.Link className="text-light opacity-50">Kasir Azura</Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="float-start" onClick={this.props.onUserMenu}>
              Menu Pengguna
            </Nav.Link>
            <Nav.Link className="float-end">
              Admin
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
    );
  }
}

export default NavComponentAdmin;
