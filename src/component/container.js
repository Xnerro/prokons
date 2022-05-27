import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import ModalContent from './modal';

//Render Foto Produk
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
        {this.props.onModal === 'modal' && (
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
              src={data.image}
              style={{ height: '13rem' }}
            />
            <Card.Body className="d-flex flex-column">
              <div>
                <Card.Title className="fs-6 fw-bold ">{data.nama}</Card.Title>
              </div>
              <Card.Text className="align-self-start">
                {'Rp' + data.variant[0][0].price}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
  }
}

export default ContainerProduct;
