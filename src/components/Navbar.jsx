import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/static/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
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
        <Nav>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#market'>Market</Nav.Link>
          <Nav.Link href='#nosotros'>Nosotros</Nav.Link>
          <Nav.Link href='#contacto'>Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
