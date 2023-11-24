import React, { useState } from 'react';
import RatingStars from 'react-rating-stars-component';
import axios from 'axios';

function BookRatingForm({ user, oneBook }) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Добавьте код для обработки отправки формы с рейтингом
    console.log('Submitted Rating:', rating);
    await axios.post('/api/adRating', { rating, user, oneBook });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Rate the book:</label>
        <RatingStars
          count={5}
          onChange={handleRatingChange}
          size={24}
          value={rating}
          activeColor="#ffd700"
        />
      </div>
      <button type="submit">Submit Rating</button>
    </form>
  );
}

export default BookRatingForm;
