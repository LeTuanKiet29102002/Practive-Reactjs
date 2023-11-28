import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/User/TableUsers';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home/Home';
import {
  Route, Routes
} from "react-router-dom";
import Login from './components/Login/Login';

function App() {

  return (
    <div className="app-container">
      <Header/>

      <Container>
        <Routes>
          <Route path="/users" element={<TableUsers />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
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
