import { useState, useEffect } from 'react';
import reviews from '../data/reviewsSeed.json'; // Adjust the path as needed
import ReviewCard from './ReviewCard'; // Import the card component
import PropTypes from 'prop-types'; // Import PropTypes

function ReviewGrid({ count = 12 }) {
  const [displayedReviews, setDisplayedReviews] = useState([]);

  useEffect(() => {
    const prioritizeReviews = () => {
      const fiveStarReviews = reviews.filter((review) => review.stars === 5);
      const otherReviews = reviews.filter((review) => review.stars < 5);

      // Shuffle both arrays
      const shuffledFiveStars = [...fiveStarReviews].sort(() => 0.5 - Math.random());
      const shuffledOthers = [...otherReviews].sort(() => 0.5 - Math.random());

      // Combine and slice the top `count` reviews
      const combined = [...shuffledFiveStars, ...shuffledOthers].slice(0, count);
      return combined;
    };

    setDisplayedReviews(prioritizeReviews());
  }, [count]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {displayedReviews.map((review, index) => (
        <ReviewCard
          key={index}
          quote={review.quote}
          source={review.source}
          stars={review.stars}
          url={review.url}
        />
      ))}
    </div>
  );
}

// Add PropTypes for validation
ReviewGrid.propTypes = {
  count: PropTypes.number, // Validate `count` as a number
};

export default ReviewGrid;
