import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

class EditVariant extends Component {
  state = {
    harga: this.props.variant.harga,
    size: this.props.variant.size,
    isi: this.props.variant.kategori,
    stok: this.props.variant.stok,
    color: this.props.variant.color,
  };

  editData = async id => {
    axios
      .put(
        `${process.env.PUBLIC_URL}/variants/${id}`,
        {
          color: this.state.color,
          size: this.state.size,
          stock: this.state.stok,
          price: this.state.harga,
          isi: this.state.isi,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        }
      )
      .then(res => {
        this.props.close();
        setTimeout(() => {
          this.props.hide();
          this.props.alert(true, 'Data Berhasil Di Update', 'success');
        }, 1000);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="mt-5 position-absolute w-100 h-100">
        <div
          className="position-absolute bg-light d-flex align-items-center flex-column"
          style={{
            width: '67vw',
            height: '70vh',
            zIndex: '0',
          }}
        >
          <p
            onClick={this.props.close}
            style={{ cursor: 'pointer' }}
            className="align-self-end me-5 mt-3"
          >
            X
          </p>
          <Container
            style={{ zIndex: '2', backgroundColor: 'white' }}
            className="h-75 w-75"
          >
            <Form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Nama Produk</Form.Label>
                    <Form.Control
                      placeholder={this.props.variant.name}
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Harga</Form.Label>
                    <Form.Control
                      onChange={e => this.setState({ harga: e.target.value })}
                      placeholder={this.state.harga}
                      value={this.state.harga}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>stok</Form.Label>
                    <Form.Control
                      onChange={e => this.setState({ stok: e.target.value })}
                      placeholder={this.state.stok}
                      value={this.state.stok}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Ukuran :</Form.Label>
                    <div className="d-flex flex-wrap">
                      {['XS', 'S', 'M', 'L', 'X', 'XL', 'XXL'].map(x => (
                        <div key={`inline-${x}`} className="mb-3 ms-2">
                          <Form.Check
                            inline
                            checked={x === this.state.size ? true : false}
                            label={x}
                            name="group1"
                            type="radio"
                            id={`inline-${x}-1`}
                            value={x}
                            onChange={e => {
                              this.setState({ size: e.target.value });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="d-flex flex-wrap flex-column">
                    <Form.Label>Warna :</Form.Label>
                    <div className="d-flex flex-wrap">
                      {[
                        'Merah',
                        'Biru',
                        'Putih',
                        'Orange',
                        'Hitam',
                        'Army',
                        'Abu',
                      ].map(x => {
                        return (
                          <div key={`inline-${x}`} className="mb-3 ms-2">
                            <Form.Check
                              inline
                              checked={x === this.state.color ? true : false}
                              label={x}
                              name="group3"
                              type="radio"
                              id={`inline-${x}-1`}
                              value={x}
                              onChange={e => {
                                this.setState({ color: e.target.value });
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="d-flex flex-nowrap">
                <Form.Label className="w-25">Kategori :</Form.Label>
                {['Atasan', 'Bawahan', 'Setelan'].map(x => (
                  <div key={`inline-${x}`} className="mb-3 w-25 ">
                    <Form.Check
                      inline
                      checked={
                        x ===
                        this.state.isi.replace(/^\w/, c => c.toUpperCase())
                          ? true
                          : false
                      }
                      label={x}
                      name="group2"
                      type="radio"
                      id={`inline-${x}-1`}
                      value={x}
                      onChange={e => {
                        this.setState({ isi: e.target.value });
                      }}
                    />
                  </div>
                ))}
              </Row>
              <Row className="d-flex justify-content-center">
                <Button
                  className="w-75"
                  onClick={() => this.editData(this.props.id)}
                >
                  Edit
                </Button>
              </Row>
            </Form>
          </Container>
        </div>
      </div>
    );
  }
}

export default EditVariant;
