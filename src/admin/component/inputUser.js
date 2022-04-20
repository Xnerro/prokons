import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

class InputUser extends Component {
  render() {
    return (
      <Container>
        <Form className=" border p-3 rounded">
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <br></br>
            <Form.Check inline type="radio" name="role" label="true" />
            <Form.Check inline type="radio" name="role" label="false" />
          </Form.Group>
          <Button variant="primary" className="mt-2">
            Add
          </Button>
        </Form>
      </Container>
    );
  }
}

export default InputUser;
