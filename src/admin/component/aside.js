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
import User from './user/menuPengguna';
import TambahBarang from './barang/tambahanbarang';
import DataBarang from './barang/dataBarang';
import StockTable from './barang/tablestock';
import ChartContainer from './chart/tampilanChart';
import { useNavigate } from 'react-router-dom';
import '../../menu.css';

function Sidebar() {
  const [activepage, setActivePage] = useState('dataBarang');
  const [show, setShow] = useState('dataBarang');
  const [apath, setPath] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    setPath('/kasir');
  }, []);

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
    history(apath);
  };

  return (
    <Container fluid>
      <Row>
        <Col
          lg={3}
          className="menucolor"
          style={{ paddingTop: '10px', height: '100vh' }}
        >
          <Row
            className={`p-1 mt-3 menubtn-color rounded mx-1 mb-2 text-center shadow ${
              activepage == 'dataBarang' ? 'menubtn-color-active text-white' : ''
            }`}
            onClick={handleShow}
            style={{ cursor: 'pointer' }}
          >
            <div class="d-flex align-items-center justify-content-center">
              <MdViewList size="2em" />
              <h5 className="p-1 mt-2">Data Barang</h5>
            </div>
          </Row>
          <Row
            className={`p-1 menubtn-color rounded mx-1 mb-2 text-center shadow ${
              activepage == 'laporanPenjualan' ? 'menubtn-color-active text-white' : ''
            }`}
            onClick={handleShow2}
            style={{ cursor: 'pointer' }}
          >
            <div class="d-flex align-items-center justify-content-center">
              <MdLeaderboard size="2em" />
              <h5 className="p-1 mt-2">Laporan Penjualan</h5>
            </div>
          </Row>
          <Row
            className={`p-1 menubtn-color rounded mx-1 mb-2 text-center shadow ${
              activepage == 'menuPengguna' ? 'menubtn-color-active text-white' : ''
            }`}
            onClick={handleShow3}
            style={{ cursor: 'pointer' }}
          >
            <div class="d-flex align-items-center justify-content-center">
              <MdManageAccounts size="2em" />
              <h5 className="p-1 mt-2">Menu Pengguna</h5>
            </div>
          </Row>
          <Row
            className={`p-1 menubtn-color rounded mx-1 mb-2 text-center shadow ${
              activepage == 'tambahanBarang' ? 'menubtn-color-active text-white' : ''
            }`}
            onClick={handleShow4}
            style={{ cursor: 'pointer' }}
          >
            <div class="d-flex align-items-center justify-content-center">
              <MdNoteAdd size="2em" />
              <h5 className="p-1 mt-2">Tambahan Barang</h5>
            </div>
          </Row>
          <Row
            className={`p-1 menubtn-color rounded mx-1 mb-2 text-center shadow ${
              activepage == 'tableStock' ? 'menubtn-color-active text-white' : ''
            }`}
            onClick={handleShow5}
            style={{ cursor: 'pointer' }}
          >
            <div class="d-flex align-items-center justify-content-center">
              <MdTableView size="2em" />
              <h5 className="p-1 mt-2">Table Stock</h5>
            </div>
          </Row>
          <Row
            className={`p-1 menubtn-color rounded mx-1 mb-2 text-center shadow1`}
            style={{ cursor: 'pointer' }}
            onClick={toKasir}
          >
            <div class="d-flex align-items-center justify-content-center">
              <MdAddShoppingCart size="2em" />
              <h5 className="p-1 mt-2">Kasir</h5>
            </div>
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
