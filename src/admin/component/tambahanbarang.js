import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button } from 'react-bootstrap';

function TambahBarang() {
  return (
    <Row className="border border-2 py-3 ms-2 mt-5">
      <Col>
        <div
          style={{ width: '300px', height: '300px' }}
          className="border border-3 mx-auto mt-5"
        ></div>
      </Col>
      <Col className="p-3">
        <Form>
          <Form.Group className="mb-3" controlId="idbarang">
            <Form.Label>Id Barang</Form.Label>
            <Form.Control type="text" placeholder="Id Barang" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="namabarang">
            <Form.Label>Nama Barang</Form.Label>
            <Form.Control type="text" placeholder="Nama Barang" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="hargabarang">
            <Form.Label>Harga Barang</Form.Label>
            <Form.Control type="text" placeholder="harga Barang" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>File Gambar</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Size</Form.Label>
            {['checkbox'].map(type => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="S"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="M"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="X"
                  name="group1"
                  type={type}
                  id={`inline-${type}-3`}
                />
                <Form.Check
                  inline
                  label="L"
                  name="group1"
                  type={type}
                  id={`inline-${type}-4`}
                />
                <Form.Check
                  inline
                  label="XL"
                  name="group1"
                  type={type}
                  id={`inline-${type}-5`}
                />
                <Form.Check
                  inline
                  label="XXL"
                  name="group1"
                  type={type}
                  id={`inline-${type}-6`}
                />
                <Form.Check
                  inline
                  label="XXXL"
                  name="group1"
                  type={type}
                  id={`inline-${type}-7`}
                />
              </div>
            ))}
          </Form.Group>
          <Button type="submit" variant="primary" className="py-2">
            Tambah Barang
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default TambahBarang;
