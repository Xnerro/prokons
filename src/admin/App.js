import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './component/navbar';
import Sidebar from './component/aside';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <NavComponent />
      <Sidebar />
    </div>
  );
}

export default App;
