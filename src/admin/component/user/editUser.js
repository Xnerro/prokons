import axios from 'axios';
import React, { Component } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

class EditUser extends Component {
  state = {
    user: '',
  };
  getUser = async id => {
    axios
      .get(`http://localhost:3000/users/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      })
      .then(res => {
        let result = res.data.data;
        this.setState(x => {
          let user = { ...x.user };
          user.name = result.name;
          user.username = result.username;
          user.role = result.role;
          return { user };
        });
      });
  };

  editUser = async id => {
    if (this.state.user.password !== '') {
      axios
        .put(`${process.env.PUBLIC_URL}/users/${id}`, this.state.user, {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        })
        .then(res => {
          this.props.alert(true, 'Data Berhasil Di Ubah', 'success');
          this.props.close();
          setTimeout(() => {
            this.props.alert(false, '', '');
          }, 2000);
        });
    } else {
    }
  };

  componentDidMount = () => {
    this.getUser(this.props.id);
  };
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Container
          className="position-absolute w-50 h-50 bg-light border border-3"
          fluid
        >
          <p
            className="position-absolute end-0 me-5 mt-3"
            style={{ cursor: 'pointer', zIndex: '2' }}
            onClick={() => this.props.close()}
          >
            X
          </p>
          <Container className="d-flex justify-content-center flex-column h-100">
            <h3 className="text-center fw-light mb-5">Edit User</h3>
            <Form className="w-100">
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      placeholder={this.state.user.name}
                      onChange={e => {
                        this.setState(x => {
                          let user = { ...x.user };
                          user.name = e.target.value;
                          return { user };
                        });
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      placeholder={this.state.user.username}
                      onChange={e => {
                        this.setState(x => {
                          let user = { ...x.user };
                          user.username = e.target.value;
                          return { user };
                        });
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onChange={e => {
                        this.setState(x => {
                          let user = { ...x.user };
                          user.password = e.target.value;
                          return { user };
                        });
                      }}
                      placeholder="Masukan Password Yang Sebelumnya Untuk Validasi"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group>
                  <Col className="mt-2">
                    <Form.Label className="me-3">Role :</Form.Label>
                    {['cashier', 'admin'].map(x => (
                      <Form.Check
                        key={x}
                        type="radio"
                        inline
                        checked={x === this.state.user.role ? true : false}
                        name="user"
                        label={x.replace(/^\w/, c => c.toUpperCase())}
                        value={x}
                        onChange={e => {
                          this.setState(x => {
                            let user = { ...x.user };
                            user.role = e.target.value;
                            return { user };
                          });
                        }}
                      />
                    ))}
                  </Col>
                </Form.Group>
              </Row>
              <Button
                onClick={() => {
                  setTimeout(() => {
                    this.editUser(this.props.id);
                  }, 1000);
                }}
                className="w-100 mt-3"
              >
                Edit
              </Button>
            </Form>
          </Container>
        </Container>
      </div>
    );
  }
}

export default EditUser;
