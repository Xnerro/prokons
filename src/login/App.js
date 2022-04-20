import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { withRouter } from '../component/navigation';

class Login extends Component {
  state = {
    account: [
      { user: 'bagus', admin: true },
      { user: 'syam', admin: false },
    ],
    admin: '',
  };
  constructor() {
    super();
    this.toNavigate = this.toNavigate.bind(this);
  }

  userHadle = event => {
    this.setState({ admin: event.target.value });
  };

  toNavigate = () => {
    const x = this.state.account.filter(c => c.user === this.state.admin);
    if (x[0].admin === true) {
      let path = 'kasir/admin';
      this.props.navigate(path, { nama: 'bagus' });
    } else {
      let path = 'kasir';
      this.props.navigate(path);
    }
  };
  render() {
    return (
      <Container
        fluid
        style={{ height: '100vh', width: '100vw' }}
        className="bg-light d-flex align-items-center justify-content-center"
      >
        <Form className="w-50 h-75 shadow d-flex flex-column align-items-center justify-content-around">
          <h1 className="mt-5">Login</h1>
          <Form.Group className="w-75 mt-5">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={this.userHadle}
              type="text"
              placeholder="username"
            />
          </Form.Group>
          <Form.Group className="w-75">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="password" />
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="mb-5 w-75"
            onClick={this.toNavigate}
          >
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Login);
