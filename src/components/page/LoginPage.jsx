import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function LoginPage() {
  const [error, setError] = useState({
    email: false,
    password: false,
    text: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    try {
      const response = await axios.post('/api/auth/login', formData);
      if (response.status === 200) {
        setError({
          email: false,
          password: false,
          text: '',
        });
        window.location.href = '/';
      }
    } catch (err) {
      console.log(err);
      const { status } = err.response;
      const { message } = err.response.data;
      switch (status) {
        case 400:
          setError({ email: true, password: true, text: message });
          break;
        case 401:
          setError({ email: true, password: false, text: message });
          break;
        case 403:
          setError({ email: false, password: true, text: message });
          break;
        default:
          break;
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control isInvalid={error.email} name="email" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          isInvalid={error.password}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
