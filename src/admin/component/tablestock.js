import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';

class StockTable extends Component {
  state = {};
  render() {
    return (
      <Container fluid className="mt-5">
        <Table striped hover className="align-middle">
          <thead>
            <tr>
              <td>No</td>
              <td>id_Barang</td>
              <td>Nama Barang</td>
              <td>Harga Barang</td>
              <td>Size Barang</td>
              <td>Stok</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>3</td>
              <td>celana</td>
              <td>80</td>
              <td>80</td>
              <td>80</td>
              <td className="w-0 p-0">
                <span className="d-flex justify-content-around">
                  <BsFillTrashFill style={{ cursor: 'pointer' }} />
                  <BsPencilSquare style={{ cursor: 'pointer' }} />
                </span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>3</td>
              <td>baju</td>
              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td className="w-0 p-0">
                <span className="d-flex justify-content-around">
                  <BsFillTrashFill style={{ cursor: 'pointer' }} />
                  <BsPencilSquare style={{ cursor: 'pointer' }} />
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default StockTable;
