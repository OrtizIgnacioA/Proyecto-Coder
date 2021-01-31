import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/static/logo.svg';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>
          <img
            src={logo}
            alt=''
            width='30'
            height='30'
            className='d-inline-block align-top'
          />
          Stein
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-end'
        >
          <CartWidget />
          <Nav>
            <Nav.Link href='#home'>Home</Nav.Link>
            <NavDropdown title='Market' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#market/2.1'>Cervezas</NavDropdown.Item>
              <NavDropdown.Item href='#market/2.2'>Combos</NavDropdown.Item>
              <NavDropdown.Item href='#market/2.3'>
                Merchandising
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#nosotros'>Nosotros</Nav.Link>
            <Nav.Link href='#contacto'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
