import React, { Component } from 'react';
import { Row, Container, Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class AddVariant extends Component {
  state = {
    selected: '',
    properties: {
      ukuran: '',
      warna: '',
      kategori: '',
      stok: 0,
      harga: 0,
    },
    product: [],
    variant: [],
    id: 0,
  };

  getProduct = async () => {
    await axios
      .get('http://localhost:3000/products', {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      })
      .then(res => {
        this.setState({ product: res.data.data });
      });
  };

  filter = () => {
    let x = {
      productId: this.state.id,
      color: this.state.properties.warna,
      size: this.state.properties.ukuran,
      isi: this.state.properties.kategori.toLowerCase(),
      stock: this.state.properties.stok,
      price: this.state.properties.harga,
    };
    this.setState({ variant: this.state.variant.concat(x) });
    setTimeout(() => {
      this.props.close();
      this.postProduct(this.state.variant);
    }, 1000);
  };

  postProduct = async id => {
    console.log(this.state.variant);
    await axios({
      url: `${process.env.PUBLIC_URL}/variants`,
      method: 'post',
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
      data: this.state.variant,
    }).then(res =>
      this.props.alert(true, 'Data Berhasil Ditambahkan', 'success')
    );
  };

  componentDidMount = () => {
    this.getProduct();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.product.length !== this.state.product.length) {
      this.getProduct();
    }
  };

  selectedFile = name => {
    this.setState({ selected: name });
  };

  render() {
    return (
      <div
        className="position-absolute ms-3"
        style={{ width: '72.5vw', height: '90vh', background: 'white' }}
      >
        <Row className="d-flex justify-content-center">
          <h4 className="text-center fw-light mt-3">Data Produk</h4>
          <p
            style={{ cursor: 'pointer' }}
            className="text-end fw-light mt-3 position-absolute"
            onClick={this.props.close}
          >
            X
          </p>
          <div
            className=" d-flex align-items-center mt-4 overflow-auto"
            style={{ width: '95%', height: '225px' }}
          >
            {this.state.product.map(x => (
              <div
                key={x.id}
                className="d-flex flex-column align-items-center me-3"
                onClick={() => this.selectedFile('madani' + x.id)}
              >
                <img
                  className={` ${
                    this.state.selected === 'madani' + x.id
                      ? 'selectedFile'
                      : 'shadow-sm'
                  }`}
                  style={{ width: '150px', height: '150px', cursor: 'pointer' }}
                  src={x.image}
                  onClick={() => this.setState({ id: x.id })}
                />
                <p>{x.name}</p>
              </div>
            ))}
          </div>
        </Row>

        <Row className="border mt-5">
          <Col md={6}>
            <Container className="p-4">
              <Form>
                <Form.Group>
                  <Form.Label>Ukuran :</Form.Label>
                  <div className="d-flex">
                    {['XS', 'S', 'M', 'L', 'X', 'XL', 'XXL'].map(x => (
                      <div key={`inline-${x}`} className="mb-3 ms-2">
                        <Form.Check
                          inline
                          label={x}
                          name="group1"
                          type="radio"
                          id={`inline-${x}-1`}
                          value={x}
                          onChange={e => {
                            this.setState(prev => {
                              let properties = {
                                ...prev.properties,
                              };
                              properties.ukuran = e.target.value;
                              return { properties };
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Kategori :</Form.Label>
                  <div className="d-flex">
                    {['Atasan', 'Bawahan', 'Setelan'].map(x => (
                      <div key={`inline-${x}`} className="mb-3 ms-2">
                        <Form.Check
                          inline
                          label={x}
                          name="group2"
                          type="radio"
                          id={`inline-${x}-1`}
                          value={x}
                          onChange={e => {
                            this.setState(prev => {
                              let properties = {
                                ...prev.properties,
                              };
                              properties.kategori = e.target.value;
                              return { properties };
                            });
                            console.log(this.state.properties.kategori);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </Form.Group>
                <Form.Group className="d-flex flex-wrap flex-column">
                  <Form.Label>Warna :</Form.Label>
                  <select className="form-select">
                    <option>Buka Untuk Memilih Warna</option>
                    {this.props.color.map(x => (
                      <option
                        className="form-control"
                        key={x.id}
                        label={x.name}
                        name="group3"
                        type="radio"
                        id={`inline-${x}-1`}
                        value={x.name}
                        onChange={e => {
                          this.setState(prev => {
                            let properties = {
                              ...prev.properties,
                            };
                            properties.warna = e.target.value;
                            return { properties };
                          });
                        }}
                      >
                        {x.name}
                      </option>
                    ))}
                  </select>
                </Form.Group>
              </Form>
            </Container>
          </Col>
          <Col>
            <Container>
              <Form>
                <Form.Group>
                  <Form.Label>Harga</Form.Label>
                  <Form.Control
                    onChange={e => {
                      this.setState(prev => {
                        let properties = {
                          ...prev.properties,
                        };
                        properties.harga = e.target.value;
                        return { properties };
                      });
                    }}
                    type="number"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Stok</Form.Label>
                  <Form.Control
                    onChange={e => {
                      this.setState(prev => {
                        let properties = {
                          ...prev.properties,
                        };
                        properties.stok = e.target.value;
                        return { properties };
                      });
                    }}
                    type="number"
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Button
                    onClick={() => {
                      this.filter();
                    }}
                  >
                    Tambah
                  </Button>
                </Form.Group>
              </Form>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddVariant;
