import React, { Component} from "react";
import { Container } from 'react-bootstrap'

class OrderList extends Component {
    render() { 
        return (
            <Container fluid="lg" className="bg-white order-box">
                <div className="d-flex flex-column">
                    {this.props.dataOrder.map(x => 
                        <p key={x.id}>{x.nama} - {x.harga}</p>
                    )}
                </div>
            </Container>
        );
    }
}
 
export default OrderList;