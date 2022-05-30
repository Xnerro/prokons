import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import {
  MdOutlineAccountBox,
  MdLock,
} from 'react-icons/md';
import { withRouter } from '../component/navigation';
import axios from 'axios';
import '../App.css';
import jwt from 'jwt-decode';

class Login extends Component {
  state = {
    name: '',
    password: '',
    show: false,
  };

  getData = async e => {
    e.preventDefault();
    await axios({
      url: `${process.env.PUBLIC_URL}/users/login`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: {
        username: this.state.name,
        password: this.state.password,
      },
    })
      .then(res => {
        const user = jwt(res.data.data.token).data;
        this.props.akun(user.name, user.role);
        this.props.token(res.data.data.token);
        localStorage.setItem('name', user.name);
        localStorage.setItem('role', user.role);
        localStorage.setItem('token', res.data.data.token);
        if (user.role === 'admin') {
          let path = 'kasir/admin';
          this.props.navigate(path);
        } else {
          let path = '/kasir';
          this.props.navigate(path);
        }
      })
      .catch(err => {
        console.log(err.response);
        this.setState({ show: true, msg: err.response.data.message });
      });
  };

  render() {
    return (
      <Container
        fluid
        style={{ height: '100vh', width: '100vw' }}
        className="bg-light d-flex align-items-center justify-content-center"
      >
        <Form className="form-set w-50 h-75 shadow d-flex flex-column align-items-center justify-content-around rounded mb-0">
          <span className="d-flex flex-column align-items-center mt-2">
            <img alt="azuraLogo" src="azuraLogo.png" width="100px" />
            <h1 className="">Login</h1>
          </span>
          <Form.Group className="w-75 mt-1">
            <Form.Label><MdOutlineAccountBox size="1.5em"/> Username</Form.Label>
            <Form.Control
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Masukan username"
            />
          </Form.Group>
          <Form.Group className="w-75">
            <Form.Label><MdLock size="1.5em"/> Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="mb-5 w-75"
            onClick={this.getData}
          >
            Login
          </Button>
          <Alert
            show={this.state.show}
            variant="danger"
            className="alert-custom position-absolute"
          >
            {this.state.msg}
          </Alert>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Login);
