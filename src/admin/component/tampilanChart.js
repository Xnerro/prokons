import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ChartAdmin from './chart';

class ChartContainer extends Component {
  state = {};
  render() {
    return (
      <Container fluid className="mt-5">
        <ChartAdmin />
        <Row className="justify-content-md-center text-center mt-5">
          <Col xs lg="2">
            <Button>Penjualan</Button>
          </Col>
          <Col md="auto"></Col>
          <Col xs lg="2">
            <Button>Per Produk</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ChartContainer;
