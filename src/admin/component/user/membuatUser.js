import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function BuatUser(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [role, setRole] = useState();

  const sendData = e => {
    axios({
      url: `${process.env.PUBLIC_URL}/users`,
      method: 'post',
      data: {
        name: name,
        username: username,
        role: role,
        password: password,
      },
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        props.alert(true, 'Data Berhasil Ditambah', 'success');
        setTimeout(() => {
          props.alert(false, '', '');
        }, 2000);
      })
      .catch(err => console.log(err));
  };
  return (
    <div
      className="position-absolute bg-light p-5 rounded"
      style={{ zIndex: '2', width: '70%' }}
    >
      <h1 className="text-center pb-3">Membuat User</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dad">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          {['radio'].map(type => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="User"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                value="cashier"
                onChange={e => setRole(e.target.value)}
              />
              <Form.Check
                inline
                label="Admin"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                value="admin"
                onChange={e => setRole(e.target.value)}
              />
            </div>
          ))}
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            props.close();
            setTimeout(() => {
              sendData();
            }, 1000);
          }}
        >
          Buat Akun
        </Button>
        <Button
          variant="secondary"
          type=""
          onClick={e => {
            props.close();
          }}
          style={{ marginLeft: '20px' }}
        >
          Keluar
        </Button>
      </Form>
    </div>
  );
}

export default BuatUser;
