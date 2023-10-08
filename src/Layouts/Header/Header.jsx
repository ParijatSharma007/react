import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  const fullname = 'parijat'
  const id = 1234
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
      <Container>
        <Navbar.Brand as={Link} to="/">MyApp4</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-decoration-none text-white" as={Link} to="/">

              Home

            </Nav.Link>
            <Nav.Link className="text-decoration-none text-white" as={Link} to={`about-page/${fullname}/${id}`}>

              About

            </Nav.Link>
            <Nav.Link className="text-decoration-none text-white" as={Link} to="service-page">

              Services

            </Nav.Link>
            <Nav.Link className="text-decoration-none text-white" as={Link} to="feature-page">

              Features

            </Nav.Link>
            <Nav.Link className="text-decoration-none text-white" as={Link} to="all-user">

              Users

            </Nav.Link>

            <Nav.Link className="text-decoration-none text-white" as={Link} to="posts">

              Posts

            </Nav.Link>
            
          </Nav>
          <Nav className="gap-2">
            <Nav.Link className="btn btn-primary" href="#">Login</Nav.Link>
            <Nav.Link eventKey={2} className="btn btn-light text-blue" href="#" as={Link} to={'submit-form'}>
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
