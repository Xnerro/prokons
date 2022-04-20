import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import ModalAdd from '../admin/component/modal';
import ModalContent from './modal';

class ContainerProduct extends Component {
  state = {
    x: [],
    modalAdd: false,
  };
  onAdd = () => {
    this.setState({ modalAdd: true });
  };
  onClose = () => {
    this.setState({ modalAdd: false });
  };
  render() {
    return (
      <Container className="container-produk d-flex flex-wrap ps-2 pt-1">
        {this.props.onModal && (
          <ModalContent
            onModal={this.props.onModalHide}
            dataModal={this.props.modalImg}
            onAdd={this.props.onCLickImg}
            onAdmin={this.props.adminValidate}
          />
        )}
        {this.props.dataImg.map(data => (
          <Card
            ref={this.Card}
            key={data.id}
            id={data.title}
            style={{ width: '13rem' }}
            className="ms-5 p-1 mt-4 d-block h-50 shadow-sm"
            onClick={() => this.props.onModalShow(data.id)}
          >
            <Card.Img
              variant="top"
              src={data.src}
              style={{ height: '13rem' }}
            />
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title className="fs-6 fw-bold">{data.title}</Card.Title>
                <Card.Text>{data.text}</Card.Text>
              </div>
              <Card.Text className="align-self-end">
                {data.nominal + data.harga}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
        {this.props.adminValidate && (
          <Card
            ref={this.Card}
            style={{ width: '13rem' }}
            className="ms-5 p-1 mt-4 d-block h-50 shadow-sm  hover"
            onClick={this.onAdd}
          >
            <Card.Img
              variant="top"
              src="https://www.downloadclipart.net/medium/44267-complete-add-images.png"
              className="opacity-50"
              style={{ height: '13rem' }}
            />
          </Card>
        )}
        {this.state.modalAdd && <ModalAdd onCloseModal={this.onClose} />}
      </Container>
    );
  }
}

export default ContainerProduct;
