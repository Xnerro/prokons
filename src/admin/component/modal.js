import React, { Component } from 'react';
import { Container, Form, Badge, Button } from 'react-bootstrap';

class ModalAdd extends Component {
  render() {
    return (
      <Container
        fluid
        className="position-absolute bg-light d-flex justify-content-start flex-column"
        style={{ width: '70vw', height: '80vh', zIndex: 3 }}
      >
        <Badge
          bg="danger"
          className="align-self-end mt-4 opacity-75"
          style={{ cursor: 'pointer' }}
          onClick={this.props.onCloseModal}
        >
          X
        </Badge>
        <h1 className="text-center mb-2">Menambahkan Barang</h1>
        <Container fluid className="shadow-lg w-75 h-5 p-5 rounded">
          <Form>
            <Form.Group>
              <Form.Label>Id Barang</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Deskripsi Singkat</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="me-2 mt-3">
                Ukuran Yang Tersedia :
              </Form.Label>
              <Form.Check type="checkbox" inline label="S"></Form.Check>
              <Form.Check type="checkbox" inline label="M"></Form.Check>
              <Form.Check type="checkbox" inline label="L"></Form.Check>
              <Form.Check type="checkbox" inline label="XL"></Form.Check>
              <Form.Check type="checkbox" inline label="XXL"></Form.Check>
              <Form.Check type="checkbox" inline label="XXXL"></Form.Check>
            </Form.Group>
            <Form.Group>
              <Form.Label>Harga Barang</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Control type="file" />
            </Form.Group>
            <Button className="w-100 mt-3">Add</Button>
          </Form>
        </Container>
      </Container>
    );
  }
}

export default ModalAdd;
