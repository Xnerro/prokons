import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FaTshirt } from 'react-icons/fa';
import { GiTrousers, GiClothes } from 'react-icons/gi';
import ContainerProduct from './container';
import OrderList from './orderList';
import SearchField from './search';

//Component Main side bar dan container
class Content extends Component {
  state = {
    img: [],
    listOrder: [],
    modal: false,
    onModal: '',
    subHarga: 0,
    Total: 0,
  };

  addList = (data, qty, size) => {
    if (qty !== 0 && size !== '') {
      const x = this.state.img.filter(c => c.id === data);
      // const x = this.state.img[data]
      const num = Math.floor(Math.random(1) * 100);
      const listData = {
        id: num,
        nama: x[0].title,
        harga: x[0].harga,
        qty: qty,
        size: size,
      };
      this.setState({ listOrder: this.state.listOrder.concat(listData) });
      this.setState({ modal: false });
      this.setState({ subHarga: x[0].harga * qty });
      this.setState({ Total: this.state.Total + qty * x[0].harga });
    }
  };

  addBaju = () => {
    this.setState({ img: this.props.dataBaju });
  };

  addCelana = () => {
    this.setState({ img: this.props.dataCelana });
    console.log(this.state.img);
  };

  addSetelan = () => {
    this.setState({ img: this.props.dataSetelan });
  };

  modalShow = data => {
    this.setState({ modal: true });
    this.setState({ onModal: this.state.img.filter(c => c.id === data) });
    console.log(this.state.onModal);
  };

  modalHide = () => {
    this.setState({ modal: false });
  };

  deleteListOrder = data => {
    let index = this.state.listOrder.findIndex(x => {
      if (x.id === data) {
        return true;
      }
    });
    let c = this.state.listOrder.splice(index, 1);
    this.setState({ orderList: c });
    this.setState({ subHarga: '-' + c[0].harga * c[0].qty });
    this.setState({ Total: this.state.Total - c[0].harga * c[0].qty });
  };

  sumTotal = (data, qty) => {
    this.setState({ Total: this.state.Total + qty * data });
  };

  render() {
    return (
      <Container fluid>
        <Row className="w-auto">
          <Col
            lg="3"
            className="d-flex flex-column justify-content-between border-end"
          >
            <center className="fw-light">
              <Row className="border-bottom shadow-sm category">
                <Col className=" pt-3 mb-3 d-blok">
                  <h5 onClick={this.addSetelan}>
                    <GiClothes className="me-3" />
                    Set
                  </h5>
                </Col>
              </Row>
              <Row className="border-bottom shadow-sm category">
                <Col className=" pt-3 mb-3 d-blok">
                  <h5 onClick={this.addBaju}>
                    <FaTshirt className="me-3" />
                    Baju
                  </h5>
                </Col>
              </Row>
              <Row className="border-bottom shadow-sm category">
                <Col className=" pt-3 mb-3 d-blok">
                  <h5 onClick={this.addCelana}>
                    <GiTrousers className="me-3" />
                    Celana
                  </h5>
                </Col>
              </Row>
            </center>
            <Row className="height d-flex align-content-end">
              <Col className="order p-3 d-flex flex-column justify-content-between">
                <OrderList
                  dataOrder={this.state.listOrder}
                  onDelete={this.deleteListOrder}
                />
                <Container className="shadow-lg invoice p-3 mt-5">
                  <span className="d-flex justify-content-between mb-3">
                    <h5>Subtotal</h5>
                    <h5>Rp.{this.state.subHarga}</h5>
                  </span>
                  <span className="d-flex justify-content-between">
                    <h6>Total</h6>
                    <h6>Rp.{this.state.Total}</h6>
                  </span>
                </Container>
                <Button
                  variant="secondary"
                  className="rounded shadow-lg mt-auto"
                >
                  Checkout
                </Button>
              </Col>
            </Row>
          </Col>
          <Col className="pt-4">
            <Row>
              <Col>
                <SearchField />
              </Col>
            </Row>
            <Row className="p-2">
              <Col className="produck-box overflow-auto">
                <ContainerProduct
                  dataImg={this.state.img}
                  onCLickImg={this.addList}
                  onModalShow={this.modalShow}
                  onModal={this.state.modal}
                  onModalHide={this.modalHide}
                  modalImg={this.state.onModal}
                  adminValidate={this.props.adminValidation}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
