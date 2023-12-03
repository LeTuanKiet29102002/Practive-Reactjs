import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.scss';
import logo from '../assets/img/react.png';
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { handleLogoutRedux } from '../redux/actions/userAction';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.account)

  const handleLogOut = () => {
    dispatch(handleLogoutRedux());


  }
  useEffect(() => {
    if (user && user.auth === false&& window.location.pathname === '/login') {
      navigate('/');
      toast.success('Log out successfully!')
    }
  },[user])


  return (
    <div className='header-container'>
      <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand >
            <NavLink className='nav-link' to="/">
              <img
                src={logo}
                width='20'
                height='20'
                alt='logo'
              />
              <span style={{ color: 'black' }}>KiMoon</span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {(user && user.auth || window.location.pathname === '/') &&
              <>
                <Nav className="me-auto" >
                  <NavLink className='nav-link' to="/">Home</NavLink>
                  <NavLink className='nav-link' to="/users">Manage Users</NavLink>

                </Nav>
                <Nav>
                  {user && user.auth && <span className='nav-link'>Welcome: {user.email} </span>}
                  <NavDropdown title="Setting" id="basic-nav-dropdown">
                    {user && user.auth === true
                      ?
                      <NavDropdown.Item onClick={() => { handleLogOut() }}>Logout</NavDropdown.Item>
                      :
                      <NavLink className='dropdown-item' to="/login">Login</NavLink>
                    }
                  </NavDropdown>
                </Nav>
              </>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default Header;