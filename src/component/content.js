import { remove } from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FaTshirt } from 'react-icons/fa';
import { GiTrousers, GiClothes } from 'react-icons/gi';
import ContainerProduct from './container';
import Order from './orderComp/order';
import OrderList from './orderList';

//Component Main side bar dan container
class Content extends Component {
  state = {
    img: [],
    listOrder: [],
    modal: false,
    onModal: '',
    subHarga: 0,
    Total: 0,
    order: [],
  };
  sendData = async () => {
    await axios({
      url: `${process.env.PUBLIC_URL}/orders`,
      method: 'post',
      headers: { Authorization: `${localStorage.getItem('token')}` },
      data: this.state.order,
    }).then(res => {
      this.setState({ listOrder: [] });
    });
  };

  addList = (data, qty, size, show, color) => {
    if (qty !== 0 && size !== '' && show === false && color !== '') {
      const x = this.state.img.filter(c => c.id === data);
      // const x = this.state.img[data]
      const num = Math.floor(Math.random(1) * 100);
      const listData = {
        id: num,
        nama: x[0].nama,
        harga: x[0].variant[0][0].price,
        qty: qty,
        size: size,
        color: color,
      };
      let id = remove(
        this.state.img.map(c =>
          c.variant[0].filter(x => x.size === size && x.color === color)
        ),
        function (n) {
          return n.length !== 0;
        }
      );
      console.log(id);
      this.setState({
        listOrder: this.state.listOrder.concat(listData),
        modal: false,
        Total: this.state.Total + qty * x[0].variant[0][0].price,
        order: this.state.order.concat({ qty: qty, variantId: id[0][0].id }),
      });
    }
  };

  addBaju = () => {
    this.setState({ img: this.props.dataBaju });
  };

  addCelana = () => {
    this.setState({ img: this.props.dataCelana });
  };

  addSetelan = () => {
    this.setState({ img: this.props.dataSetelan });
  };

  modalShow = data => {
    this.setState({ modal: 'modal' });
    this.setState({ onModal: this.state.img.filter(c => c.id === data) });
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
    this.setState({ Total: this.state.Total - c[0].harga * c[0].qty });
  };

  sumTotal = (data, qty) => {
    this.setState({ Total: this.state.Total + qty * data });
  };

  getTotal = () => {
    let num = 0;
    this.state.listOrder.map(x => (num = num + x.qty));
    this.setState({ subHarga: num });
  };

  render() {
    return (
      <Container fluid>
        <Row className="w-auto">
          <Col
            lg="3"
            className="d-flex flex-column justify-content-between bg-secondary pb-5"
            style={{ height: '96vh' }}
          >
            <center className="fw-light">
              <Row className=" shadow-sm category shadow-lg mt-3">
                <Col className=" pt-3 mb-3 d-blok">
                  <h5 onClick={this.addSetelan}>
                    <GiClothes className="me-3" />
                    Set
                  </h5>
                </Col>
              </Row>
              <Row className=" shadow-sm category mt-2 shadow-lg">
                <Col className=" pt-3 mb-3 d-blok">
                  <h5 onClick={this.addBaju}>
                    <FaTshirt className="me-3" />
                    Baju
                  </h5>
                </Col>
              </Row>
              <Row className=" shadow-sm category mt-2 shadow-lg">
                <Col className=" pt-3 mb-3 d-blok">
                  <h5 onClick={this.addCelana}>
                    <GiTrousers className="me-3" />
                    Celana
                  </h5>
                </Col>
              </Row>
            </center>
            <Row className="height d-flex align-content-end mt-3">
              <Col className="order p-3 d-flex flex-column justify-content-between">
                <OrderList
                  dataOrder={this.state.listOrder}
                  onDelete={this.deleteListOrder}
                />
                <Container className="shadow-lg invoice p-3">
                  <span className="d-flex justify-content-between">
                    <h6>Total</h6>
                    <h6>Rp.{this.state.Total}</h6>
                  </span>
                </Container>
                <Button
                  onClick={() => {
                    this.setState({ modal: 'order' });
                    this.getTotal();
                  }}
                  variant="primary"
                  className="rounded shadow-lg mt-auto"
                >
                  Checkout
                </Button>
              </Col>
            </Row>
          </Col>
          <Col className="pt-4">
            <Order
              modal={this.state.modal}
              orders={this.state.order}
              listOrder={this.state.listOrder}
              hide={this.modalHide}
              total={this.state.subHarga}
              totalBelanja={this.state.Total}
              post={this.sendData}
            />
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
