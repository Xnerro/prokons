import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Table } from 'react-bootstrap';
import BuatUser from './membuatUser';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import ValidationDelete from '../validasiDelete';
import EditUser from './editUser';

function User() {
  const [user, setUser] = useState(false);
  const [dataUser, setData] = useState([]);
  const [id, setId] = useState('');
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleAddUser2 = () => {
    setUser(false);
  };

  const getAlert = (x, y, z) => {
    setAlert(x => ({ ...x, show: x, msg: y, type: z }));
  };

  const getData = () => {
    axios
      .get(`${process.env.PUBLIC_URL}/users`, {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      })
      .then(res => {
        setData(res.data.data);
      });
  };

  const deleteUser = id => {
    axios
      .delete(`${process.env.PUBLIC_URL}/users/${id}`, {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      })
      .then(res => {
        getAlert(true, 'Data Berhasil Terhapus', 'danger');
        setTimeout(() => {
          getAlert(false, '', '');
        }, 2000);
      });
  };

  useEffect(() => {
    getData();
  }, [alert]);

  return (
    <div className="d-flex flex-column mt-5">
      {user === 'buat' ? (
        <BuatUser close={handleAddUser2} alert={getAlert} />
      ) : null}
      {user === 'delete' ? (
        <ValidationDelete delete={deleteUser} id={id} close={handleAddUser2} />
      ) : null}
      {user === 'edit' ? (
        <EditUser id={id} close={handleAddUser2} alert={getAlert} />
      ) : null}
      <Alert
        show={alert.show}
        variant={alert.type}
        className="text-center mt-3"
      >
        {alert.msg}
      </Alert>
      <Table striped bordered hover className="align-middle">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Username</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {dataUser.map((x, i) => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.username}</td>
              <td>{x.role}</td>
              <td className="w-0 p-0">
                <span className="d-flex justify-content-around">
                  <BsFillTrashFill
                    onClick={() => {
                      setUser('delete');
                      setId(x.id);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                  <BsPencilSquare
                    onClick={() => {
                      setUser('edit');
                      setId(x.id);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        variant="primary"
        className="mx-3 py-2 mb-3 mt-1"
        onClick={() => {
          setUser('buat');
        }}
      >
        Tambah User
      </Button>
    </div>
  );
}

export default User;
