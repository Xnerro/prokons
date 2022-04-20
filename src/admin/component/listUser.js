import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';

class ListUser extends Component {
  state = {
    user: [
      {
        id: 1,
        nama: 'bagus',
        password: 123,
        admin: true,
        role: 'true',
      },
      {
        id: 1,
        nama: 'syam',
        password: 112233,
        admin: false,
        role: 'false',
      },
    ],
  };
  render() {
    return (
      <Container fluid>
        <Table variant="ligth" striped hover bordered>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Password</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map(x => (
              <tr key={x.id}>
                <td>{x.nama}</td>
                <td>{x.password}</td>
                <td>{x.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default ListUser;
