import React, {Component} from "react";
import { Col, Container, Row, Badge, Button } from "react-bootstrap";
import { FaTshirt } from 'react-icons/fa'
import { GiTrousers, GiClothes } from 'react-icons/gi'
import ContainerProduct from "./container";
import OrderList from "./orderList";
import SearchField from "./search";
import $ from 'jquery';

class Content extends Component {
    state ={
        img: [],
        listOrder : [],
        modal : false,
        onModal : '',
    }

    addList = (data, qty, size) =>{
        if (qty !== 0){
            const x = this.state.img.filter(c => c.id === data)
            // const x = this.state.img[data]
            const num = Math.floor(Math.random(1)*100)  
            const listData = {id: num, nama: x[0].title, harga: x[0].harga, qty: qty, size: size}
            this.setState({listOrder : this.state.listOrder.concat(listData)})
            this.setState({modal : false})
        }
    }

    addBaju = () =>{
        this.setState({img : this.props.dataBaju})
    }
    
    addCelana = () =>{
        this.setState({img : this.props.dataCelana})
        console.log(this.state.img)
    }

    addSetelan = () =>{
        this.setState({img : this.props.dataSetelan})
    }

    modalShow = (data) =>{
        this.setState({modal : true})
        this.setState({onModal : this.state.img.filter(c => c.id === data)})
        console.log(this.state.onModal)
    }

    modalHide = () =>{
        this.setState({modal : false})
    }

    deleteListOrder = (data) =>{
        let index = this.state.listOrder.findIndex(x => {
            if( x.id === data){
                return true
            }
        })
        this.setState({orderList : this.state.listOrder.splice(index,1)})
    }

    render() { 
        return (
            <Container fluid>
                <Row className="w-auto">
                    <Col lg="3" className="d-flex flex-column justify-content-between border-end">
                        <center className="fw-light">
                            <Row className="border-bottom shadow-sm category">
                                <Col className=" pt-3 mb-3 d-blok">
                                    <h5 onClick={this.addSetelan}><GiClothes className="me-3" />Set</h5>
                                </Col>
                            </Row>
                            <Row className="border-bottom shadow-sm category">
                                <Col className=" pt-3 mb-3 d-blok">
                                    <h5 onClick={this.addBaju}><FaTshirt className="me-3" />Baju</h5>
                                </Col>
                            </Row>
                            <Row className="border-bottom shadow-sm category">
                                <Col className=" pt-3 mb-3 d-blok">
                                    <h5 onClick={this.addCelana}><GiTrousers className="me-3"/>Celana</h5>
                                </Col>
                            </Row>
                        </center>
                        <Row className="height d-flex align-content-end">
                            <Col className="order p-3 d-flex flex-column justify-content-between">
                                <OrderList dataOrder={this.state.listOrder} onDelete={this.deleteListOrder}/>
                                <Container className="shadow-lg invoice p-3 mt-5">
                                    <span className="d-flex justify-content-between">
                                        <h5>Subtotal</h5>
                                        <h5>Rp.23123</h5>
                                    </span>
                                    <h6 className="fw-normal mt-3 mb-3">Diskon</h6>
                                    <h6 className="fw-normal mt-3 mb-3">Total</h6>
                                </Container>
                                <Button variant="secondary" className="rounded shadow-lg mt-auto">Checkout</Button>
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
                                <ContainerProduct dataImg={this.state.img} onCLickImg={this.addList} onModalShow={this.modalShow} onModal={this.state.modal} onModalHide={this.modalHide} modalImg={this.state.onModal}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default Content;