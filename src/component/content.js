import React, {Component} from "react";
import { Col, Container, Row, Badge, Button } from "react-bootstrap";
import { FaTshirt } from 'react-icons/fa'
import { GiTrousers, GiClothes } from 'react-icons/gi'
import ContainerProduct from "./container";
import OrderList from "./orderList";
import SearchField from "./search";

class Content extends Component {
    state ={
        img: [{id: 0, src:"https://th.bing.com/th/id/OIP.R03fDmx1XrRjnT0wW6RhQQHaHa?pid=ImgDet&rs=1", title: 'Baju', text: 'kemeja', nominal: 'Rp', harga: '20000' },
        {id: 1, src:"https://th.bing.com/th/id/OIP.R03fDmx1XrRjnT0wW6RhQQHaHa?pid=ImgDet&rs=1", title: 'Dewasa', text: 'kemeja', nominal: 'Rp', harga: '20000' },{id: 2, src:"https://th.bing.com/th/id/OIP.R03fDmx1XrRjnT0wW6RhQQHaHa?pid=ImgDet&rs=1", title: 'Anak', text: 'kemeja', nominal: 'Rp', harga: '20000' }, {id: 3, src:"https://th.bing.com/th/id/OIP.R03fDmx1XrRjnT0wW6RhQQHaHa?pid=ImgDet&rs=1", title: 'Anak Balita', text: 'kemeja', nominal: 'Rp', harga: '20000' }],
        listOrder : []
    }

    addList = (data) =>{
        const x = this.state.img[data]
        const listData = {id: x.id, nama: x.title, harga: x.harga}
        console.log(listData)
        this.setState({listOrder : this.state.listOrder.concat(listData)})
        console.log(this.state.listOrder)
    }

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
                                <OrderList dataOrder={this.state.listOrder}/>
                                <Container className="shadow-lg invoice p-3">
                                    <span className="d-flex justify-content-between">
                                        <h5>Subtotal</h5>
                                        <h5>Rp.23123</h5>
                                    </span>
                                    <h6 className="fw-normal mt-3 mb-3">Diskon</h6>
                                    <h6 className="fw-normal mt-3 mb-3">Total</h6>
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
                            <Col className="produck-box overflow-auto">
                                <ContainerProduct dataImg={this.state.img} onCLickImg={this.addList}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default Content;