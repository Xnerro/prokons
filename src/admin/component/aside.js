import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import {
  MdManageAccounts,
  MdLeaderboard,
  MdTableView,
  MdViewList,
  MdNoteAdd,
  MdAddShoppingCart,
} from 'react-icons/md';
import React, { useState, useEffect } from 'react';
import User from './menuPengguna';
import TambahBarang from './tambahanbarang';
import DataBarang from './dataBarang';
import StockTable from './tablestock';
import ChartContainer from './tampilanChart';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const [activepage, setActivePage] = useState('dataBarang');
  const [show, setShow] = useState('dataBarang');
  const [apath, setPath] = useState(null);
  const history = useNavigate();

  useEffect(() => {}, []);
  const handleShow = () => {
    setShow('dataBarang');
    setActivePage('dataBarang');
  };

  const handleShow2 = () => {
    setShow('laporanPenjualan');
    setActivePage('laporanPenjualan');
  };

  const handleShow3 = () => {
    setShow('menuPengguna');
    setActivePage('menuPengguna');
  };

  const handleShow4 = () => {
    setShow('tambahanBarang');
    setActivePage('tambahanBarang');
  };

  const handleShow5 = () => {
    setShow('tableStock');
    setActivePage('tableStock');
  };

  const toKasir = () => {
    setPath('/kasir');
    history(apath);
  };

  return (
    <Container fluid>
      <Row>
        <Col
          lg={3}
          className="bg-secondary"
          style={{ paddingTop: '10px', height: '100vh' }}
        >
          <Row
            className={`p-3 mt-3 bg-light rounded mx-1 mb-2 text-center shadow ${
              activepage == 'dataBarang' ? 'bg-dark text-white' : ''
            }`}
            onClick={handleShow}
            style={{ cursor: 'pointer' }}
          >
            <h5>
              <MdViewList />
              Data Barang
            </h5>
          </Row>
          <Row
            className={`p-3 bg-light rounded mx-1 mb-2 text-center shadow ${
              activepage == 'laporanPenjualan' ? 'bg-dark text-white' : ''
            }`}
            onClick={handleShow2}
            style={{ cursor: 'pointer' }}
          >
            <h5>
              <MdLeaderboard />
              Laporan Penjualan
            </h5>
          </Row>
          <Row
            className={`p-3 bg-light rounded mx-1 mb-2 text-center shadow ${
              activepage == 'menuPengguna' ? 'bg-dark text-white' : ''
            }`}
            onClick={handleShow3}
            style={{ cursor: 'pointer' }}
          >
            <h5>
              <MdManageAccounts /> Menu Pengguna
            </h5>
          </Row>
          <Row
            className={`p-3 bg-light rounded mx-1 mb-2 text-center shadow ${
              activepage == 'tambahanBarang' ? 'bg-dark text-white' : ''
            }`}
            onClick={handleShow4}
            style={{ cursor: 'pointer' }}
          >
            <h5>
              <MdNoteAdd />
              Tambahan Barang
            </h5>
          </Row>
          <Row
            className={`p-3 bg-light rounded mx-1 mb-2 text-center shadow ${
              activepage == 'tableStock' ? 'bg-dark text-white' : ''
            }`}
            onClick={handleShow5}
            style={{ cursor: 'pointer' }}
          >
            <h5>
              <MdTableView />
              Tabel Stok
            </h5>
          </Row>
          <Row
            className={`p-3 bg-light rounded mx-1 mb-2 text-center shadow1`}
            style={{ cursor: 'pointer' }}
            onClick={toKasir}
          >
            <h5>
              <MdAddShoppingCart />
              Kasir
            </h5>
          </Row>
        </Col>
        <Col>
          <Row className="mx-2" style={{ paddingRight: '20px' }}>
            {show == 'dataBarang' && <DataBarang />}
            {show == 'laporanPenjualan' && <ChartContainer />}
            {show == 'menuPengguna' && <User />}
            {show == 'tambahanBarang' && <TambahBarang />}
            {show == 'tableStock' && <StockTable />}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
