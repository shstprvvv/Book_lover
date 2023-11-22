import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FormMainPage({book}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{`Writer: ${}`}</Card.Text>
        <Card.Text>{`IMDB: ${}`}</Card.Text>
        <Button variant="primary">Добавить</Button>
      </Card.Body>
    </Card>
  );
}

export default FormMainPage;