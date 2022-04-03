import React, {Component} from "react";
import { Col, Container, Row, Badge, Button } from "react-bootstrap";
import { FaTshirt } from 'react-icons/fa'
import { GiTrousers, GiClothes } from 'react-icons/gi'
import SearchField from "./search";

class Content extends Component {
    render() { 
        return (
            <Container fluid>
                <Row className="height w-auto">
                    <Col lg="3" className="d-flex flex-column justify-content-between border-end border">
                        <center className="fw-light">
                            <Row className="border-bottom shadow-sm category">
                                <Col className=" pt-3 mb-3 d-blok">
                                    <h5><GiClothes className="me-3" />Set</h5>
                                </Col>
                            </Row>
                            <Row className="border-bottom shadow-sm category">
                                <Col className=" pt-3 mb-3 d-blok">
                                    <h5><FaTshirt className="me-3" />Baju</h5>
                                </Col>
                            </Row>
                            <Row className="border-bottom shadow-sm category">
                                <Col className=" pt-3 mb-3 d-blok">
                                    <h5><GiTrousers className="me-3"/>Celana</h5>
                                </Col>
                            </Row>
                        </center>
                        <Row>
                            <Col className="order p-3 d-flex flex-column justify-content-between">
                                <Container Fluid className="bg-white order-box">
                                    <div className="order-list fw-light d-flex">
                                        <p>Baju kemja pria baru - Xl</p>
                                    </div>
                                    <div className="order-list fw-light d-flex">
                                        <p>Baju kemja pria baru - Xl</p>
                                    </div>
                                    <div className="order-list fw-light d-flex">
                                        <p>Baju kemja pria baru - Xl</p>
                                    </div>
                                </Container>
                                <Container className="shadow-lg invoice p-3">
                                    <h5>Harga</h5>
                                </Container>
                                <Button variant="secondary" className="rounded shadow-lg">Checkout</Button>
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
                            <Col>
                                teoka
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default Content;