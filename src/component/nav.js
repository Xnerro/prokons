import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { withRouter } from './navigation';
import axios from 'axios';
import '../menu.css';

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
      <Navbar variant="dark" className="head navcolor">
        <Container fluid="lg">
          <Navbar.Brand className="fw-bold" href="#home">
              <div className="d-flex align-items-center">
                <img alt="azuraLogo" src="/azuraLogo.png" width="40px" />
                <h4 className="m-2">Kasir Azura</h4>
              </div>
          </Navbar.Brand>
          <Nav className="float-end">
            {localStorage.getItem('role') === 'admin' ? (
              <Nav.Link>
                <div class="p-1 btn-secondary rounded mb-0" onClick={() => {
                  let path = '/kasir/admin';
                  this.props.navigate(path);
                }}
              >
                Admin Menu
              </div>
              </Nav.Link>
            ) : null}
            <Nav.Link>
              <div className="d-flex align-items-center">
                {localStorage.getItem('name')}
                <img
                  alt="usericon"
                  src="https://th.bing.com/th/id/OIP.vIq_QWTLmuEoct13lW83UwHaHa?pid=ImgDet&rs=1"
                  className="rounded-circle ms-2 profile"
                  width="32px"
                  height="32px"
                />
              </div>
            </Nav.Link>
            <Nav.Link>
              <div
                  className="mt-1 d-flex align-items-center"
                  onClick={() => {
                    this.logOut();
                  }}
                >
                  Logout
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(NavComponent);
