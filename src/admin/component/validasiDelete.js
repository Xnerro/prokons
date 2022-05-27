import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

class ValidationDelete extends Component {
  state = {};
  render() {
    return (
      <>
        <div
          style={{
            width: '70vw',
            height: '80vh',
            background: 'white',
            position: 'absolute',
            zIndex: '0',
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <Container
            style={{ zIndex: '2', background: 'white' }}
            className="w-50 h-50 rounded border border-3 d-flex justify-content-center flex-column align-items-center"
          >
            <h3 className="mb-5 fw-light">Apakah Anda Yakin?</h3>
            <span>
              <Button
                onClick={() => {
                  this.props.close();
                  this.props.delete(this.props.id);
                }}
                variant="primary"
                style={{ width: '70px' }}
              >
                Ya
              </Button>
              <Button
                variant="danger"
                className="ms-3"
                style={{ width: '70px' }}
                onClick={() => this.props.close()}
              >
                Tidak
              </Button>
            </span>
          </Container>
        </div>
      </>
    );
  }
}

export default ValidationDelete;
