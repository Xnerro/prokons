import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { concat, uniq } from 'lodash';

function DataBarang() {
  const [data, setData] = useState(null);

  const getData = async () => {
    axios
      .get(`${process.env.PUBLIC_URL}/products`, {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      })
      .then(res => {
        filterData(res.data.data);
      })
      .catch(err => console.log(err));
  };

  const filterData = async result => {
    let setelan = [];
    let atasan = [];
    let bawahan = [];
    await result.map(key => {
      if (key.variants.map(c => c.isi === 'atasan').includes(true)) {
        atasan.push({
          id: key.id,
          nama: key.name,
          image: key.image,
          variant: [key.variants.filter(c => c.isi === 'atasan')],
        });
      }

      if (key.variants.map(c => c.isi === 'setelan').includes(true)) {
        setelan.push({
          id: key.id,
          nama: key.name,
          image: key.image,
          variant: [key.variants.filter(c => c.isi === 'setelan')],
        });
      }
      if (key.variants.map(c => c.isi === 'bawahan').includes(true)) {
        bawahan.push({
          id: key.id,
          nama: key.name,
          image: key.image,
          variant: [key.variants.filter(c => c.isi === 'bawahan')],
        });
      }
    });
    setData(concat(setelan, atasan, bawahan));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className=" d-flex flex-column mt-5 overflow-hidden"
      style={{ height: '80vh' }}
    >
      <Container className="overflow-auto">
        <Table striped hover className="sm align-middle">
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Nama Barang</th>
              <th>Kategori</th>
              <th>Ukuran</th>
              <th>Harga</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((c, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <img src={`${c.image}`} width={'75pc'} height={'80pc'} />
                    </td>
                    <td>{c.nama}</td>
                    <td>{c.variant[0][0].isi}</td>
                    <td>{uniq(c.variant[0].map(c => c.size)) + ''}</td>
                    <td>{c.variant[0][0].price}</td>
                    <td>{uniq(c.variant[0].map(c => c.color)) + ''}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default DataBarang;
