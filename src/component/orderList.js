import React, { Component} from "react";
import { Container } from 'react-bootstrap'

class OrderList extends Component {
    state = { 
        order: []
     } 
    render() { 
        return (
            <Container fluid="lg" className="bg-white order-box">
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
        );
    }
}
 
export default OrderList;