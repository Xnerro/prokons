import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import InputUser from './inputUser';
import ListUser from './listUser';

class UserMenu extends Component {
  state = {
    windows: window.innerWidth,
  };
  render() {
    return (
      <Container
        fluid
        className="position-absolute bg-light d-flex justify-content-start flex-column"
        style={{ width: '100vw', height: '100vh', zIndex: 3 }}
      >
        <h1 className="text-center mt-5 mb-5">Menu User</h1>
        <Container fluid className="shadow-lg w-75 h-5 p-5 rounded">
          <Row className="w-100 h-75">
            <Col lg={4}>
              <ListUser />
            </Col>
            <Col>
              <InputUser />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default UserMenu;
