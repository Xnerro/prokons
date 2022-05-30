import React, { Component } from 'react';
import { Badge, Button, Container, Form } from 'react-bootstrap';
import { uniq } from 'lodash';

import '../App.css';
// Modal tambah baju
class ModalContent extends Component {
  state = {
    qty: 0,
    sizeFix: '',
    colorFix: '',
    color: [],
    size: [],
    msg: '',
    show: false,
  };

  componentDidMount = () => {
    let arr = [];
    let arr2 = [];
    this.props.dataModal[0].variant[0].map(x => {
      arr.push(x.size);
      arr2.push(x.color);
    });
    this.setState({ size: uniq(arr), color: uniq(arr2) });
  };

  getSize = event => {
    this.setState({ sizeFix: event.target.value });
  };

  getColor = e => {
    this.setState({ colorFix: e.target.value });
  };

  incrementHand = () => {
    const x = (this.state.qty += 1);
    this.setState({ qty: x });
  };

  decrementHand = () => {
    if (this.state.qty !== 0) {
      const x = (this.state.qty -= 1);
      this.setState({ qty: x });
    }
  };

  filterOrder = () => {
    let z = [];
    this.props.dataModal.map(c =>
      c.variant.map(
        c =>
          (z = c.filter(
            x =>
              x.color === this.state.colorFix && x.size === this.state.sizeFix
          ))
      )
    );
    if (z.length === 0) {
      this.setState({ show: true, msg: 'Variant tidak tersedia' });
      console.log('variant tidak tersedia');
    } else if (z[0].stock > 0) {
      this.setState({ show: false });
      console.log(z);
    } else if (z[0].stock === 0) {
      console.log('stock habis');
      this.setState({ show: true, msg: 'Stok Habis' });
    }
  };

  render() {
    return (
      <div>
        <Container
          fluid
          className="addModal"
          onClick={this.props.onModal}
        ></Container>
        <div className="addModal-content d-flex justify-content-between">
          <div className="pt-4 ps-4 pb-4">
            {this.props.dataModal.map(xImg => (
              <div className="d-flex" key={xImg.id}>
                <img
                  src={xImg.image}
                  style={{ width: '25rem', height: '25rem' }}
                  className="shadow-sm"
                />
                <div className="ms-4 mt-2 d-flex flex-column justify-content-between desc">
                  <div>
                    <h5>{xImg.nama}</h5>
                    {this.state.show && (
                      <div
                        className="rounded"
                        style={{ backgroundColor: '#ff7376' }}
                      >
                        <p className="ms-3">{this.state.msg}</p>
                      </div>
                    )}
                    <div className="d-flex flex-column flex-wrap mt-5">
                      <span className="d-flex">
                        {this.state.size.map((x, i) => (
                          <span key={i} className="me-2">
                            <p>{x}</p>
                            <input
                              name="size"
                              type="radio"
                              value={x}
                              onChange={this.getSize}
                            />
                          </span>
                        ))}
                      </span>
                      <span className="d-flex">
                        {this.state.color.map((x, i) => (
                          <span key={i} className="me-2 mt-3">
                            <p>{x}</p>
                            <input
                              name="color"
                              type="radio"
                              value={x}
                              onChange={this.getColor}
                            />
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                  <div className="ms-0 d-flex justify-content-between">
                    <span className="d-flex align-items-center">
                      <button
                        className="ms-4 counter rounded me-3"
                        onClick={this.decrementHand}
                      >
                        -
                      </button>
                      <Badge className="fs-6 me-3 bg-light text-dark">
                        {this.state.qty}
                      </Badge>
                      <button
                        className="counter rounded"
                        onClick={this.incrementHand}
                      >
                        +
                      </button>
                    </span>
                    <Button
                      className="ms-3"
                      onClick={async () => {
                        console.log(xImg.id);
                        await this.filterOrder();
                        await this.props.onAdd(
                          xImg.id,
                          this.state.qty,
                          this.state.sizeFix,
                          this.state.show,
                          this.state.colorFix
                        );
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ModalContent;
