import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.scss';
import logo from '../assets/img/react.png';
import { NavLink } from "react-router-dom";

function Header() {
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
              <span>KiMoon</span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <NavLink className='nav-link' to="/">Home</NavLink>
              <NavLink className='nav-link' to="/users">Manage Users</NavLink>
              
            </Nav>
            <Nav>
                <NavDropdown title="Setting" id="basic-nav-dropdown">
                  <NavDropdown.Item >
                    <NavLink className='nav-link' to="/login">Login</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item >
                    <NavLink className='nav-link' to="logout">Logout</NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default Header;