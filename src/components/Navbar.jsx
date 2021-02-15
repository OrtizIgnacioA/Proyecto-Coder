import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/static/logo.svg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Link to={'/'}>
          <Navbar.Brand>
            <img
              src={logo}
              alt=''
              width='30'
              height='30'
              className='d-inline-block align-top'
            />
            Stein
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-end'
        >
          <CartWidget />
          <Nav>
            <Nav.Link>
              <Link
                to={'/'}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Home
              </Link>
            </Nav.Link>
            <NavDropdown title='Market' id='collasible-nav-dropdown'>
              <NavDropdown.Item>
                <Link to={'/market/cervezas'}>Cervezas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={'/market/combos'}>Combos</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={'/market/merchandising'}>Merchandising</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link
                to={'/nosotros'}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Nosotros
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to={'/contacto'}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Contacto
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
