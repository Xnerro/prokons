import axios from 'axios';
import React, { Component } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

class TambahColor extends Component {
  state = { warna: '' };

  sendColor = async () => {
    await axios
      .post(
        `${process.env.PUBLIC_URL}/colors`,
        { name: this.state.warna },
        {
          headers: { Authorization: `${localStorage.getItem('token')}` },
        }
      )
      .then(res => {
        this.props.alert('Warna Berhasil Ditambah', true, 'success');
        this.props.close();
        setTimeout(() => {
          this.props.alert('', false, 'success');
        }, 1500);
      });
  };
  render() {
    return (
      <div
        fluid
        className="position-absolute ms-5 bg-white d-flex align-items-center justify-content-center"
        style={{ width: '70vw', height: '80vh' }}
      >
        <Form className="w-50">
          <Form.Label>Warna</Form.Label>
          <Form.Control
            onChange={e => this.setState({ warna: e.target.value })}
          />
          <span>
            <Button
              style={{ width: '20%' }}
              className="mt-3 me-3"
              onClick={this.sendColor}
            >
              Tambah
            </Button>
            <Button
              style={{ width: '20%' }}
              variant="danger"
              onClick={this.props.close}
              className="mt-3"
            >
              Batal
            </Button>
          </span>
        </Form>
      </div>
    );
  }
}

export default TambahColor;
