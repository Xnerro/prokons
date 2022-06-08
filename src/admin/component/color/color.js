import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import { Button, Alert } from 'react-bootstrap';
import TambahColor from './tambahColor';

class TableColor extends Component {
  state = { color: [], show: false, alert: { msg: '', show: false, type: '' } };

  getColor = async () => {
    await axios
      .get(`${process.env.PUBLIC_URL}/colors`, {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      })
      .then(res => this.setState({ color: res.data.data }));
  };

  deleteColor = async id => {
    await axios
      .delete(`${process.env.PUBLIC_URL}/colors/${id}`, {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      })
      .then(res => {
        this.alertPrint('Warna Berhasil Terhapus', true, 'danger');
        setTimeout(() => {
          this.alertPrint('', false, '');
        }, 1500);
      });
  };

  alertPrint = (a, y, z) => {
    this.setState(x => {
      let alert = { ...x.alert };
      alert.msg = a;
      alert.show = y;
      alert.type = z;
      return { alert };
    });
  };

  componentDidUpdate = (props, prevState) => {
    if (prevState.show.msg !== this.state.show) {
      this.getColor();
    }
  };

  componentDidMount = async () => {
    await this.getColor();
  };

  close = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Container
        fluid
        style={{ height: '85vh' }}
        className="mt-3 d-flex justify-content-between flex-column overflow-hidden align-items-center"
      >
        {this.state.show && (
          <TambahColor close={this.close} alert={this.alertPrint} />
        )}
        <Container className="overflow-auto">
          <Alert
            show={this.state.alert.show}
            variant={this.state.alert.type}
            className="text-center"
          >
            {this.state.alert.msg}
          </Alert>
          <Table striped hover bordered className="align-middle mt-3">
            <thead>
              <tr>
                <td>Id</td>
                <td>Warna</td>
              </tr>
            </thead>
            <tbody>
              {this.state.color.map(x => (
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td className="w-0 p-0">
                    <span className="d-flex justify-content-around">
                      <BsFillTrashFill
                        onClick={() => this.deleteColor(x.id)}
                        style={{ cursor: 'pointer' }}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <Button className="w-75" onClick={() => this.setState({ show: true })}>
          Tambah Warna
        </Button>
      </Container>
    );
  }
}

export default TableColor;
