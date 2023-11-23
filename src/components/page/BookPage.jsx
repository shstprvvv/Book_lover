// Ваш компонент BookPage
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Rating from '../../ui/Rating';

export default function BookPage({ oneBook }) {
  const sum = oneBook.Ratings.reduce((accumulator, Rating) => accumulator + Rating.book_raitng, 0);

  const averageRating = sum / oneBook.Ratings.length;
  console.log(averageRating);

  const [userRating, setUserRating] = useState(averageRating);

  const handleRatingChange = (newRating) => {
    // Здесь вы можете отправить новый рейтинг на сервер или выполнить другие действия
    console.log('New rating:', newRating);
    setUserRating(newRating);
  };

  return (
    <div className="row g-0">
      <div className="col-md-4">
        <img src={oneBook.img} alt={oneBook.nameBook} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h3 className="card-title">{oneBook.nameBook}</h3>
          <p className="card-text">{`Writer: ${oneBook.writer}`}</p>
          <p className="card-text">{`Description: ${oneBook.owner_comment}`}</p>
          <p className="card-text">
            Rating: <Rating initialRating={averageRating} onRatingChange={handleRatingChange} />
          </p>
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
