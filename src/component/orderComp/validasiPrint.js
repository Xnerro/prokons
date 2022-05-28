import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';

class ValidasiPrint extends Component {
  state = {};
  render() {
    return (
      <Container fluid className="w-50 h-50 bg-white">
        <Button>Print</Button>
        <Button variant="danger">Tidak</Button>
      </Container>
    );
  }
}

export default ValidasiPrint;
