import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import CommentCard from '../../ui/CommentCard';
import Rating from '../../ui/Rating';

export default function BookPage({ oneBook, comments }) {
  const sum = oneBook.Ratings.reduce((accumulator, Rating) => accumulator + Rating.book_raitng, 0);
  const averageRating = sum / oneBook.Ratings.length;
  console.log(averageRating);

  const [userRating, setUserRating] = useState(averageRating);

  const handleRatingChange = (newRating) => {
    // Здесь вы можете отправить новый рейтинг на сервер или выполнить другие действия
    console.log('New rating:', newRating);
    setUserRating(newRating);
  };

  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = {};
      formDataToSend.user_comment = comment;
      formDataToSend.book_id = oneBook.id;
      await axios.post('/api/addcomment', formDataToSend);
      setComment('');
    } catch (error) {
      // Handle errors
      console.error('Error adding comment:', error.message);
    }
  };

  return (
    <div className="row g-0">
      <div className="col-md-4">
        <img src={oneBook.img} alt={`${oneBook.nameBook} cover`} />
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
            <Form.Label htmlFor="user_comment">Add your comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="user_comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Form.Group>

          <Button onClick={handleSubmit} variant="success">
            Submit
          </Button>
          <br />
          <br />

          <div>
            {comments.map((oneComment) => (
              <CommentCard oneComment={oneComment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
