import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function AddBook() {
  const [formData, setFormData] = useState({
    nameBook: '',
    writer: '',
    img: null,
    owner_comment: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = {};
      formDataToSend.nameBook = formData.nameBook;
      formDataToSend.writer = formData.writer;
      formDataToSend.img = formData.img;
      formDataToSend.owner_comment = formData.owner_comment;

      await axios.post('/api/addbook', formDataToSend);
      window.location.href = '/';
    } catch (error) {
      // Handle errors
      console.error('Error adding book:', error.message);
    }
  };



  const formContainerStyle = {
    background: '#D8BFD8',

    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: 'auto',

    // marginTop: '10vh',
  };


  const style = {
    backgroundImage:
      "url('https://img1.akspic.ru/crops/4/0/0/5/5/155004/155004-minimalizm-ekoregion-fioletovyj-art-purpurnyj_cvet-3840x2160.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '800px',
  };

  return (
    <div style={style}>
    <Form onSubmit={handleSubmit} style={formContainerStyle}>

      <Form.Group controlId="formNameBook">
        <Form.Label>Введите название книги</Form.Label>
        <Form.Control
          type="text"
          placeholder="Название книги"
          name="nameBook"
          value={formData.nameBook}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formWriter">
        <Form.Label>Укажите автора</Form.Label>
        <Form.Control
          type="text"
          placeholder="Имя автора"
          name="writer"
          value={formData.writer}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formImg">
        <Form.Label>Ссылка на изображение</Form.Label>
        <Form.Control
          type="text"
          placeholder="Укажи ссылку"
          name="img"
          value={formData.img}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formOwnerComment">
        <Form.Label>Оставьте ваш комментарий</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Комментарий"
          name="owner_comment"
          value={formData.owner_comment}
          onChange={handleChange}
        />
      </Form.Group>
      <br />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default AddBook;
