import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './component/navbar';
import Sidebar from './component/aside';

function App(props) {
  if (props.role === 'admin') {
    return (
      <div style={{ height: '100vh' }}>
        <NavComponent setToken={props.setToken} name={props.akun} />
        <Sidebar />
      </div>
    );
  }
  return <h1>Hello</h1>;
}

export default App;
