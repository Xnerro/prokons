import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './style.css';
import { AiOutlineEye } from 'react-icons/ai';

class DetailOrder extends Component {
  state = { data: [], id: null, order: null, user: null };
  getData = async () => {
    await axios
      .get(`${process.env.PUBLIC_URL}/transactions`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      })
      .then(res => {
        this.filterData(res.data.data);
      });
  };
  filterData = res => {
    let x = [];
    res.map(c => {
      let d = new Date(c.transactionDate);
      x.push({
        id: c.id,
        status: c.status,
        tanggal: `${d.getDate()} - ${d.getMonth()} - ${d.getFullYear()}`,
        total: c.totalOrder,
      });
      this.setState({ data: x });
    });
  };

  getDataById = async id => {
    await axios
      .get(`${process.env.PUBLIC_URL}/transactions/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      })
      .then(res => {
        this.setState({
          order: res.data.data.orders,
          user: res.data.data.users,
        });
      });
  };

  componentDidMount = () => {
    this.getData();
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <h3 className="fw-light text-center mt-3">Detail Order</h3>
        </Row>
        <Row style={{ height: '25vh' }}>
          <Col className="bg-light rounded-det p-2 shadow-sm me-3">
            <h5 className="fw-light text-center mt-3">Order</h5>

            {this.state.order !== null ? (
              <Container className="overflow-auto" style={{ height: '15vh' }}>
                {this.state.order.map(x => (
                  <Row key={x.id} className="fw-light mb-3">
                    <Col className="" md={2}>
                      id: {x.id}
                    </Col>
                    <Col md={3}>Qty: {x.qty}</Col>
                    <Col md={3}>Variant: {x.variants.id}</Col>
                    <Col>Produk: {x.variants.products.name}</Col>
                  </Row>
                ))}
              </Container>
            ) : null}
          </Col>
          <Col lg={4} className="bg-light rounded-det p-2 shadow-sm">
            <h5 className="fw-light text-center mt-3">Info Pegawai</h5>
            {this.state.user !== null ? (
              <Container fluid className="fw-light">
                <Row className="mb-3">
                  <Col>Nama: {this.state.user.name}</Col>
                </Row>
                <Row>
                  <Col>Role: {this.state.user.role}</Col>
                </Row>
              </Container>
            ) : null}
          </Col>
        </Row>
        <Row className="overflow-hidden" style={{ height: '35vh' }}>
          <Col
            className="bg-light rounded-det p-2 mt-5 shadow-sm overflow-auto"
            style={{ height: '35vh' }}
          >
            {this.state.data !== [] ? (
              <table className="w-100">
                <thead>
                  <tr>
                    <th>idTransaksi</th>
                    <th>Status</th>
                    <th>Total Order</th>
                    <th>Tanggal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map(x => (
                    <tr key={x.id}>
                      <td>{x.id}</td>
                      <td>{x.status}</td>
                      <td>{x.total}</td>
                      <td>{x.tanggal}</td>
                      <td
                        style={{ cursor: 'pointer' }}
                        onClick={() => this.getDataById(x.id)}
                      >
                        <AiOutlineEye />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DetailOrder;
