import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/User/TableUsers';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <div className="app-container">
      <Header />
      <Container>
        <TableUsers />
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
