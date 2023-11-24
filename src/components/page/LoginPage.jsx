import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../../config/RegistrationPage.css';

export default function LoginPage() {
  const [error, setError] = useState({
    email: false,
    password: false,
    phone: '+7',
    text: '',
  });

  const handlePhoneChange = (e) => {
    let newValue = e.target.value;
    // newValue = newValue.replace(/\D/g, ''); // Uncomment this line to remove non-numeric characters

    if (!newValue.includes('+7')) {
      newValue = `+7${newValue}`;
    }

    // Проверяем, ограничиваем ли длину введенных цифр до 12 и проверяем, что содержит только цифры после символа '+'
    if (/^\+7\d*$/.test(newValue) && newValue.length <= 12) {
      setError((prevError) => ({ ...prevError, phone: newValue }));
    }
  };

  // && /^\d+$/.test(newValue)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    try {
      const response = await axios.post('/api/auth/login', formData);
      if (response.status === 200) {
        setError({
          email: false,
          password: false,
          phone: false,
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

  const formContainerStyle = {
    background: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: 'auto',
    // marginTop: '10vh',
  };

  const style = {
    backgroundImage:
      "url('https://images.wallpaperscraft.ru/image/single/gradient_abstraktsiia_fon_310094_1024x768.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '700px',
  };

  return (
    <div style={style}>
      <div style={formContainerStyle}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              isInvalid={error.email}
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              Well never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              name="phone"
              type="tel"
              placeholder="Enter phone"
              value={error.phone}
              onChange={handlePhoneChange}
              pattern="\+?[0-9]*"
            />
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
      </div>
    </div>
  );
}
