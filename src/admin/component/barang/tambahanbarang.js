import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row, Col, Form, Button, Container, Alert } from 'react-bootstrap';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';

function TambahBarang(props) {
  const [file, setFile] = useState('');
  const [fName, setName] = useState('');
  const [show, setShow] = useState(null);
  const [msg, setMsg] = useState(null);
  const [type, setType] = useState('');
  const [product, setProduct] = useState([]);
  const [selected, setSelected] = useState('');

  const sendData = async () => {
    await axios({
      url: `${process.env.PUBLIC_URL}/products`,
      method: 'post',
      headers: { Authorization: `${localStorage.getItem('token')}` },
      data: {
        name: fName,
        image: file,
      },
    }).then(res => {
      setShow(true);
      setType('success');
      setMsg('Data Berhasil Ditambahkkan');
      setTimeout(() => {
        setFile(null);
        setName('');
        setShow(false);
        setMsg('');
      }, 2000);
    });
  };

  const convertBase64 = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = error => {
        reject(error);
      };
    });
  };

  const handleFileRead = async event => {
    const f = event.target.files[0];
    const base64 = await convertBase64(f);
    setFile(base64);
  };

  const getProduct = async () => {
    await axios
      .get(`${process.env.PUBLIC_URL}/products`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      })
      .then(res => {
        setProduct(res.data.data);
      });
  };

  const deleteProduct = async id => {
    await axios
      .delete(`${process.env.PUBLIC_URL}/products/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      })
      .then(res => {
        setShow(true);
        setType('danger');
        setMsg('Data Berhasil Dihapus');
        setTimeout(() => {
          setFile(null);
          setName('');
          setShow(false);
          setMsg('');
        }, 2000);
      });
  };

  const selectedFile = name => {
    setSelected(name);
  };

  useEffect(() => {
    getProduct();
  }, [msg]);
  return (
    <Container>
      <Container className="justify-content-center">
        <Alert className="text-center mt-3" show={show} variant={type}>
          {msg}
        </Alert>
      </Container>
      <Row>
        <div
          className=" d-flex align-items-center mt-4 overflow-auto"
          style={{ width: '95%', height: '225px' }}
        >
          {product.map(x => (
            <div
              key={x.id}
              className="d-flex flex-column align-items-center me-3"
              onClick={() => selectedFile('madani' + x.id)}
            >
              <span
                className={` ${
                  selected === 'madani' + x.id ? 'pop' : 'd-none'
                }`}
              >
                <BsFillTrashFill
                  onClick={() => deleteProduct(x.id)}
                  className="me-2 mt-1"
                />
              </span>
              <img
                className={` ${
                  selected === 'madani' + x.id ? 'selectedFile' : 'shadow-sm'
                }`}
                style={{ width: '150px', height: '150px', cursor: 'pointer' }}
                src={x.image}
              />
              <p>{x.name}</p>
            </div>
          ))}
        </div>
      </Row>
      <Row className="border border-2 py-3 ms-2 mt-5 d-flex align-items-center">
        <Col>
          <div
            style={{ width: '300px', height: '300px' }}
            className="shadow-sm mx-auto mt-1"
          >
            {file !== '' ? (
              <img src={file} style={{ width: '300px', height: '300px' }} />
            ) : null}
          </div>
        </Col>
        <Col className="p-3">
          <Form>
            <Form.Group className="mb-3" controlId="namabarang">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Nama Barang"
                value={fName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>File Gambar</Form.Label>
              <Form.Control onChange={handleFileRead} type="file" />
            </Form.Group>
            <Button
              onClick={e => {
                sendData();
                e.preventDefault();
              }}
              type="submit"
              variant="primary"
              className="py-2"
              value={file}
            >
              Tambah Barang
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default TambahBarang;
