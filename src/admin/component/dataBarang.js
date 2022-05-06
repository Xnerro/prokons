import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import SearchField from './search';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';

function DataBarang() {
  return (
    <div>
      <SearchField />
      <Table striped hover size="sm align-middle">
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Nama Barang</th>
            <th>Harga</th>
            <th>Ukuran</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img
                src="https://th.bing.com/th/id/OIP.R03fDmx1XrRjnT0wW6RhQQHaHa?pid=ImgDet&rs=1"
                width={'75pc'}
                height={'80pc'}
              />
            </td>
            <td>Mark</td>
            <td>20000</td>
            <td>XS,S,M,X,XL</td>
            <td className="w-0 p-0">
              <span className="d-flex justify-content-around">
                <BsFillTrashFill style={{ cursor: 'pointer' }} />
                <BsPencilSquare style={{ cursor: 'pointer' }} />
              </span>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img
                src="https://th.bing.com/th/id/OIP.R03fDmx1XrRjnT0wW6RhQQHaHa?pid=ImgDet&rs=1"
                width={'75pc'}
                height={'80pc'}
              />
            </td>
            <td>Mark</td>
            <td>20000</td>
            <td>XS,S,M,X,XL</td>
            <td className="w-0 p-0">
              <span className="d-flex justify-content-around">
                <BsFillTrashFill style={{ cursor: 'pointer' }} />
                <BsPencilSquare style={{ cursor: 'pointer' }} />
              </span>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img
                src="https://th.bing.com/th/id/OIP.R03fDmx1XrRjnT0wW6RhQQHaHa?pid=ImgDet&rs=1"
                width={'75pc'}
                height={'80pc'}
              />
            </td>
            <td>Mark</td>
            <td>20000</td>
            <td>XS,S,M,X,XL</td>
            <td className="w-0 p-0">
              <span className="d-flex justify-content-around">
                <BsFillTrashFill style={{ cursor: 'pointer' }} />
                <BsPencilSquare style={{ cursor: 'pointer' }} />
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default DataBarang;
