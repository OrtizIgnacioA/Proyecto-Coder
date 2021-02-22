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
            <Nav.Link>
              <Link
                to={'/cervezas'}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Cervezas
              </Link>
            </Nav.Link>
            {/*             <Link to={'/cervezas'}>
              <NavDropdown title='Cervezas' id='collasible-nav-dropdown'>
                <NavDropdown.Item>
                  <Link to={'/cervezas/negra/detalle'}>Negra</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={'/cervezas/rubia/detalle'}>Rubia</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={'/cervezas/rojas/detalle'}>Roja</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Link> */}
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
