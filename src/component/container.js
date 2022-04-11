import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import ModalContent from "./modal";


class ContainerProduct extends Component {
    state ={
        x : []
    }

    setX = () =>{
        console.log('berhasil')
    }
    render() { 
        return (
            <Container className="container-produk d-flex flex-wrap ps-2 pt-1">
                {this.props.onModal && <ModalContent onModal={this.props.onModalHide} dataModal={this.props.modalImg} onAdd={this.props.onCLickImg}/>}
                {this.props.dataImg.map(data => 
                    <Card ref={this.Card} key={data.id} id={data.title} style={{ width: '13rem'}} className='ms-5 p-1 mt-4 d-block h-50 shadow-sm card' onClick={() => this.props.onModalShow(data.id)}>
                        <Card.Img variant="top" src={data.src}  style={{ height: '13rem'}}/>
                        <Card.Body className="d-flex justify-content-between">
                            <div>
                                <Card.Title className="fs-6 fw-bold">{data.title}</Card.Title>
                                <Card.Text>{data.text}</Card.Text>
                            </div>
                            <Card.Text className="align-self-end">{data.nominal + data.harga}</Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </Container>
        );
    }
}
 
export default ContainerProduct;