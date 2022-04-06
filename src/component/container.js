import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";


class ContainerProduct extends Component {

    render() { 
        return (
            <Container className="container-produk d-flex flex-wrap ps-2 pt-1">
                {this.props.dataImg.map(data => 
                    <Card ref={this.Card} key={data.id} id="baju" style={{ width: '13rem'}} className="ms-5 p-1 mt-4 d-block h-50 shadow-sm card" onClick={() => this.props.onCLickImg(data.id)}>
                        <Card.Img variant="top" src={data.src} />
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