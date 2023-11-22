// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function FormMainPage({ book }) {
  return (
    <Card className="card mt-5 col-3" style={{ width: '18rem', margin: '70px' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.nameBook}</Card.Title>
        <Card.Text>{`Writer: ${book.writer}`}</Card.Text>
        {/* <Card.Text>{`IMDB: ${}`}</Card.Text> */}
        <Button variant="primary">Добавить</Button>
      </Card.Body>
    </Card>
  );
}

export default FormMainPage;