import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FormMainPage({
  book, deleteHandler, setModalContent, handleShow,
}) {
  const modalHandler = () => {
    setModalContent(book);
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

        <Button variant="primary" onClick={() => deleteHandler(book.id)}>Удалить</Button>
        <div className="mt-1" onClick={handleShow}><Button variant="primary">Редактировать</Button></div>
        <div className="mt-1"><Button variant="primary">Смотреть полную информацию</Button></div>
        {/* <Button onClick={addToFavorites} variant="primary">Избранное</Button> */}

      </Card.Body>
    </Card>
  );
}

export default FormMainPage;
