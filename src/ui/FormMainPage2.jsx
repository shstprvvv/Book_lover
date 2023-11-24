import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function FormMainPage2({
  book, deleteHandler, setModalContent, handleShow, user,
}) {
  const modalHandler = () => {
    setModalContent(book);
  };
  const addToFavorites = async (e) => {
    e.preventDefault();
    const dataToSend = {};
    dataToSend.book_id = book.id;

    try {
      await axios.post('/api/add-to-favorites', dataToSend);
    } catch (error) {
      // Handle errors
      console.error('Error adding book:', error.message);
    }
  };

  const redirectId = (id) => {
    window.location.href = `/bookpage/${id}`;
  };

  return (
    <Card
      onClick={modalHandler}
      className="card mt-5 col-3"
      style={{ width: '18rem', margin: '70px' }}
    >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.nameBook}</Card.Title>
        <Card.Text>{`Writer: ${book.writer}`}</Card.Text>
        {/* <Card.Text>{`IMDB: ${}`}</Card.Text> */}

        <div className="mt-1"><Button variant="primary" onClick={() => redirectId(book.id)}>Смотреть полную информацию</Button></div>
        {user && <Button onClick={addToFavorites} variant="primary">Избранное</Button>}

      </Card.Body>
    </Card>
  );
}

export default FormMainPage2;
