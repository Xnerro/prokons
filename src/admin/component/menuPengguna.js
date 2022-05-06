import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';
import BuatUser from './membuatUser';
import { useState } from 'react';

function User() {
  const [user, setUser] = useState(false);

  const handleAddUser = () => {
    setUser(true);
  };

  const handleAddUser2 = () => {
    setUser(false);
  };

  return (
    <div className="d-flex flex-column mt-5">
      {user ? <BuatUser close={handleAddUser2} /> : null}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>admin</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>kasir</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>Kasir</td>
          </tr>
        </tbody>
      </Table>
      <Button
        variant="primary"
        className="mx-3 py-2 mb-3 mt-1"
        onClick={handleAddUser}
      >
        Tambah User
      </Button>
    </div>
  );
}

export default User;
