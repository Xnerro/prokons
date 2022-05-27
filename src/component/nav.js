import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { withRouter } from './navigation';
import axios from 'axios';

class NavComponent extends Component {
  logOut = async () => {
    await axios
      .delete(`${process.env.PUBLIC_URL}/users/logout`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      })
      .then(res => {
        this.props.setToken();
        let path = '/';
        localStorage.removeItem('token');
        this.props.navigate(path);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Navbar bg="secondary" variant="dark" className="head">
        <Container fluid="lg">
          <Navbar.Brand className="fw-bold" href="#home">
            <img
              src={'/azuraLogo.png'}
              width="50px"
              className="me-4"
              alt="Logo"
            />
            Kasir Azura
          </Navbar.Brand>
          <Nav className="float-end">
            {localStorage.getItem('role') === 'admin' ? (
              <Nav.Link
                onClick={() => {
                  let path = '/kasir/admin';
                  this.props.navigate(path);
                }}
              >
                Admin Menu
              </Nav.Link>
            ) : null}
            <Nav.Link>
              {localStorage.getItem('name')}
              <img
                src="https://th.bing.com/th/id/OIP.vIq_QWTLmuEoct13lW83UwHaHa?pid=ImgDet&rs=1"
                className="rounded-circle ms-2 profile"
                width="30px"
                height="30px"
                alt="profile"
              />
            </Nav.Link>
            <Nav.Link>
              <p
                className="position-absolute"
                onClick={async () => {
                  await this.logOut();
                }}
              >
                Logout
              </p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(NavComponent);
