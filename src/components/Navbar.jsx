import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigbar({ user }) {
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/auth/logout');
    if (response.status === 200) {
      window.location.href = '/login';
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {user ? (
          <Navbar.Brand href="/">
            Добро пожаловать на сайт,
            {' '}
            {user.name}
          </Navbar.Brand>
        ) : (
          <Navbar.Brand href="/">Любители книг</Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && <Nav.Link href="login">Войти</Nav.Link>}
            {!user && <Nav.Link href="signup">Зарегистрироваться</Nav.Link>}
            {user && <Nav.Link onClick={logoutHandler} href="/logout">Выйти</Nav.Link>}
            {user && <Nav.Link href="addbook">Добавить книгу</Nav.Link>}
            <Nav.Link href="account">Личный кабинет</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
