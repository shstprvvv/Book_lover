import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Любители книг</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="login">Войти</Nav.Link>
            <Nav.Link href="signup">Зарегистрироваться</Nav.Link>
            <Nav.Link href="/">Выйти</Nav.Link>
            <Nav.Link href="addbook">Добавить книгу</Nav.Link>
            <Nav.Link href="account">Личный кабинет</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
