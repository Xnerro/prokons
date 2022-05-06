import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

class OrderList extends Component {
  render() {
    return (
      <Container fluid="lg" className="bg-white order-box rounded">
        <div className="d-flex flex-column">
          {this.props.dataOrder.map(x => (
            <span key={x.id} className="d-flex justify-content-between">
              <p>
                {x.nama} - {x.qty} ({x.size})
              </p>
              <p className="delete" onClick={() => this.props.onDelete(x.id)}>
                x
              </p>
            </span>
          ))}
        </div>
      </Container>
    );
  }
}

export default OrderList;
