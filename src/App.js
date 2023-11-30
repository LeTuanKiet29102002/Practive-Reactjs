import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import {
  Route, Routes
} from "react-router-dom";
import { UserContext } from './context/UserContext';
import { useContext, useEffect } from 'react'
import './App.scss'
import AppRouters from './routes/AppRoutes';
function App() {
  const { user, loginContext } = useContext(UserContext);
  console.log('check user , ', user);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      loginContext(localStorage.getItem('email'),
        localStorage.getItem('token')
      );
    }
  }, [])

  return (
    <div className="app-container">
        <Header />
        <Container>
          <AppRouters></AppRouters>
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
