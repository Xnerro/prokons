import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

class Order extends Component {
  state = { bayar: 0, print: false };
  handleCash = e => {
    e.preventDefault();
    let x = document.getElementById('cash').value;
    this.setState({ bayar: x });
  };
  render() {
    return (
      <div>
        {this.props.modal === 'order' &&
        this.state.bayar !== '' &&
        this.state.bayar !== 0 ? (
          <div
            className="position-absolute d-flex align-items-center"
            style={{
              height: '85vh',
              width: '73.5vw',
              backgroundColor: '#d0d0d0',
              zIndex: '2',
            }}
          >
            <Container
              style={{ width: '60%', height: '80vh' }}
              className="bg-light"
            >
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <span className="d-flex flex-row justify-content-between ">
                    <h3 className="mt-4 mb-3">Checkout</h3>
                    <p
                      onClick={() => {
                        this.props.hide();
                        this.setState({ bayar: 0 });
                      }}
                      className="mt-3"
                      style={{ cursor: 'pointer' }}
                    >
                      X
                    </p>
                  </span>
                  <p className="mt-4">List Produk</p>
                  <hr></hr>
                  <div className="d-flex flex-column overflow-auto">
                    <table className="border-0">
                      <thead></thead>
                      <tbody>
                        {this.props.listOrder.map(x => {
                          return (
                            <tr key={x.id}>
                              <td className="fw-light pb-1 border-0">
                                {x.nama}
                              </td>
                              <td className="fw-light border-0">{x.color}</td>
                              <td className="fw-light border-0">{x.size}</td>
                              <td className="fw-light border-0">
                                Rp.{x.harga}
                              </td>
                              <td className="fw-light border-0">{x.qty}</td>
                              <td className="fw-light border-0">
                                Rp.{x.harga * x.qty}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="w-100">
                  <hr></hr>
                  <span className="d-flex justify-content-between">
                    <p> Total Item:</p>
                    <p> {this.props.total}</p>
                  </span>
                  <span className="d-flex justify-content-between">
                    <p>Total Belanja:</p>
                    <p>Rp. {this.props.totalBelanja}</p>
                  </span>
                  <span className="d-flex justify-content-between">
                    <p>Total Kembali:</p>
                    <p>Rp. {this.props.totalBelanja - this.state.bayar}</p>
                  </span>
                  <Button
                    onClick={() => {
                      this.props.post();
                      this.props.hide();
                    }}
                    className="mb-3 w-100"
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        ) : (
          this.props.modal === 'order' && (
            <Container
              className="position-absolute bg-white h-100"
              style={{ zIndex: '2', width: '70vw' }}
            >
              <Form>
                <Form.Label>Cash :</Form.Label>
                <Form.Control id="cash" />
                <Button className="mt-3" onClick={this.handleCash}>
                  Next
                </Button>
                <Button
                  onClick={() => {
                    this.props.hide();
                    this.setState({ bayar: 0 });
                  }}
                  className="ms-3 mt-3"
                  variant="danger"
                >
                  Batal
                </Button>
              </Form>
            </Container>
          )
        )}
      </div>
    );
  }
}

export default Order;
