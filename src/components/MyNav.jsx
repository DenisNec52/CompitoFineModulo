import React from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importa l'icona del carrello da Font Awesome

const MyNav = ({ searchQuery, setSearchQuery, toggleTheme, darkTheme }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3" bg={darkTheme ? 'dark' : 'light'} data-bs-theme={darkTheme ? 'dark' : 'light'}>
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>EpiBooks</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <div className="nav-link">Home</div>
            </Link>
            <Link to="/about">
              <div className="nav-link">About</div>
            </Link>
            <Link to="/browse">
              <div className="nav-link">Browse</div>
            </Link>
          </Nav>
          <Nav className="ms-auto">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
            <Link to="/cart" className="nav-link ms-2 border">
              <FaShoppingCart /> {/* Icona del carrello */}
            </Link>
             <Button className="theme-toggle ms-2" onClick={toggleTheme}>
              {darkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
