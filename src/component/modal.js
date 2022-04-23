import React, { Component } from 'react';
import { Badge, Button, Container } from 'react-bootstrap';
import { BsTrashFill } from 'react-icons/bs';
import { GrEdit } from 'react-icons/gr';

// Modal tambah baju
class ModalContent extends Component {
  state = {
    size: [
      { id: 0, size: 'XS' },
      { id: 1, size: 'S' },
      { id: 2, size: 'M' },
      { id: 3, size: 'X' },
      { id: 4, size: 'XL' },
      { id: 5, size: 'XXL' },
      { id: 6, size: 'XXXL' },
    ],
    qty: 0,
    sizeFix: '',
  };

  getSize = event => {
    this.setState({ sizeFix: event.target.value });
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
  render() {
    return (
      <div className="overflow">
        <div className="modal-content d-flex justify-content-between">
          {this.props.onAdmin && (
            <div
              className="align-self-end d-flex justify-content-around mt-3"
              style={{ width: '5vw' }}
            >
              <GrEdit style={{ cursor: 'pointer' }} />
              <BsTrashFill style={{ cursor: 'pointer' }} />
            </div>
          )}
          <div className="pt-4 ps-4 pb-4">
            {this.props.dataModal.map(xImg => (
              <div className="d-flex" key={xImg.id}>
                <img
                  src={xImg.src}
                  style={{ width: '25rem', height: '25rem' }}
                  className="shadow-sm"
                />
                <div className="ms-4 mt-2 d-flex flex-column justify-content-between desc">
                  <div>
                    <h3>{xImg.title}</h3>
                    <p>{xImg.text}</p>
                    <div className="d-flex flex-wrap mt-5">
                      {this.state.size.map(x => (
                        <span key={x.id} className="me-4">
                          <p>{x.size}</p>
                          <input
                            type="radio"
                            name="size"
                            onChange={this.getSize}
                            value={x.size}
                          />
                        </span>
                      ))}
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
                      className="ms-5"
                      onClick={() =>
                        this.props.onAdd(
                          xImg.id,
                          this.state.qty,
                          this.state.sizeFix
                        )
                      }
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Container
          fluid
          className="modal"
          onClick={this.props.onModal}
        ></Container>
      </div>
    );
  }
}

export default ModalContent;
