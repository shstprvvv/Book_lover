import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';

function Rating({ initialRating, onRatingChange }) {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleMouseEnter = (rating) => {
    setHoveredRating(rating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const handleClick = (rating) => {
    onRatingChange(rating);
  };

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  const springProps = useSpring({
    width: `${(hoveredRating || initialRating) * 20}%`,
  });

  return (
    <div>
      <div
        style={{ display: 'flex', position: 'relative', cursor: 'pointer' }}
        onMouseLeave={handleMouseLeave}
      >
        {stars.map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={faStar}
            onMouseEnter={() => handleMouseEnter(star)}
            onClick={() => handleClick(star)}
            style={{ color: (hoveredRating || initialRating) >= star ? 'gold' : 'gray' }}
          />
        ))}
        <animated.div
          style={{
            position: 'absolute',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            ...springProps,
          }}
        >
          {stars.map((star) => (
            <FontAwesomeIcon key={star} icon={faStar} style={{ color: 'rgba(255, 215, 0, 0.5)' }} />
          ))}
        </animated.div>
      </div>
    </div>
  );
}

export default Rating;
