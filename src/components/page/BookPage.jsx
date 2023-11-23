import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function BookPage({ oneBook }) {
  const sum = oneBook.Ratings.reduce((accumulator, Rating) => accumulator + Rating.book_raitng, 0);

  const averageRating = sum / oneBook.Ratings.length;

  return (
    <div className="row g-0">
      <div className="col-md-4">
        <img src={oneBook.img} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h3 className="card-title">{oneBook.nameBook}</h3>
          <p className="card-text">{`Writer: ${oneBook.writer}`}</p>
          <p className="card-text">{`Description: ${oneBook.owner_comment}`}</p>
          <p className="card-text">Rating: {averageRating}</p>
          {/* <p className="card-text"><small className="text-muted">{`Rating count: ${film.imDbRatingCount}`}</small></p> */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Add your comment</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
          <Button variant="success">Success</Button>
        </div>
      </div>
    </div>
  );
}
