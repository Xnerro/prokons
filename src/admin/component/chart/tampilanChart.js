import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ChartAdmin from './chart';
// import DetailOrder from './detailOrder';

class ChartContainer extends Component {
  state = { show: 'chart' };
  render() {
    return (
      <Container fluid className="mt-5">
        {/* {this.state.show === 'detail' ? <DetailOrder /> : null} */}
        {this.state.show === 'chart' ? <ChartAdmin /> : null}
        {/* <Row className="justify-content-md-center text-center mt-5">
          <Button
            className="w-25 me-5"
            onClick={() => this.setState({ show: 'detail' })}
          >
            Detail Order
          </Button>
          <Button
            className="w-25"
            onClick={() => this.setState({ show: 'chart' })}
          >
            Statistik
          </Button>
        </Row> */}
      </Container>
    );
  }
}

export default ChartContainer;
