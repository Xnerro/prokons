import axios from 'axios';
import React, { Component } from 'react';
import { Alert, Button, Container, Table } from 'react-bootstrap';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import EditVariant from './editBarang';
import AddVariant from './tambahVariant';
import ValidationDelete from '../validasiDelete';

class StockTable extends Component {
  state = {
    data: [],
    alert: { show: false, msg: '', type: '' },
    show: null,
    id: null,
    variant: null,
    color: [],
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.alert.show !== this.state.alert.show) {
      this.getData();
    }
  };

  getColor = async () => {
    axios
      .get(`${process.env.PUBLIC_URL}/colors`, {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      })
      .then(res => this.setState({ color: res.data.data }));
  };

  getData = async () => {
    await axios
      .get(`${process.env.PUBLIC_URL}/products`, {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      })
      .then(res => {
        let result = res.data.data;
        this.setState({ data: result });
      });
  };

  deleteData = id => {
    axios
      .delete(`http://localhost:3000/variants/${id}`, {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      })
      .then(res => {
        this.setState(c => {
          let alert = { ...c.alert };
          alert.show = true;
          alert.msg = 'Data Terhapus';
          alert.type = 'danger';
          return { alert };
        });

        setInterval(() => {
          this.hideAlert();
        }, 2000);
      })
      .catch(err => console.log(err));
  };

  hideAlert = () => {
    this.setState(c => {
      let alert = { ...c.alert };
      alert.show = false;
      alert.msg = '';
      alert.type = '';
      return { alert };
    });
  };

  filter = (name, size, color, stok, harga, kategori) => {
    let x = {
      name: name,
      size: size,
      color: color,
      stok: stok,
      harga: harga,
      kategori: kategori,
    };
    this.setState({ variant: x });
  };

  alertAdd = (x, y, z) => {
    this.setState(c => {
      let alert = { ...c.alert };
      alert.show = x;
      alert.msg = y;
      alert.type = z;
      return { alert };
    });

    setTimeout(() => {
      this.hideAlert();
    }, 2000);
  };

  componentDidMount = () => {
    this.getData();
    this.getColor();
  };

  closeModal = () => {
    this.setState({ show: null });
  };
  render() {
    return (
      <Container
        fluid
        className=" oveflow-hidden d-flex flex-column justify-content-between align-items-center"
        style={{ height: '90vh' }}
      >
        {this.state.show === 'add' ? (
          <AddVariant
            close={this.closeModal}
            alert={this.alertAdd}
            color={this.state.color}
          />
        ) : null}
        {this.state.show === 'delete' ? (
          <ValidationDelete
            close={this.closeModal}
            delete={this.deleteData}
            id={this.state.id}
          />
        ) : null}
        <Container fluid className="overflow-auto">
          {this.state.show === 'edit' ? (
            <EditVariant
              close={this.closeModal}
              alert={this.alertAdd}
              hide={this.hideAlert}
              variant={this.state.variant}
              id={this.state.id}
              color={this.state.color}
            />
          ) : null}
          <Container
            className="d-flex justify-content-center"
            style={{ height: '50px' }}
          >
            <Alert
              show={this.state.alert.show}
              variant={this.state.alert.type}
              className="text-center mt-2 position-absolute w-50"
            >
              {this.state.alert.msg}
            </Alert>
          </Container>
          <Table striped hover className="align-middle mt-3">
            <thead>
              <tr>
                <td>Id</td>
                <td>Nama Barang</td>
                <td>Harga Barang</td>
                <td>Size Barang</td>
                <td>Warna Barang</td>
                <td>Kategori</td>
                <td>Stok</td>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(x =>
                x.variants.map((c, i) => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{x.name}</td>
                    <td>{c.price}</td>
                    <td>{c.size}</td>
                    <td>{c.color}</td>
                    <td>{c.isi}</td>
                    <td>{c.stock}</td>
                    <td className="w-0 p-0">
                      <span className="d-flex justify-content-around">
                        <BsFillTrashFill
                          onClick={() => {
                            this.setState({ show: 'delete', id: c.id });
                          }}
                          style={{ cursor: 'pointer' }}
                        />
                        <BsPencilSquare
                          onClick={() => {
                            this.setState({ show: 'edit', id: c.id });
                            this.filter(
                              x.name,
                              c.size,
                              c.color,
                              c.stock,
                              c.price,
                              c.isi
                            );
                          }}
                          style={{ cursor: 'pointer' }}
                        />
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Container>
        <Button className="w-75" onClick={() => this.setState({ show: 'add' })}>
          Tambah Variant
        </Button>
      </Container>
    );
  }
}

export default StockTable;
