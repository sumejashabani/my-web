import React, { useState } from 'react';
const Reviews = ({ reviews, reviewText, setReviewText, handleReviewSubmit }) => {
  const [rating, setRating] = useState(0); // Store the selected star rating
  const [hoverRating, setHoverRating] = useState(0);
  const handleStarClick = (newRating) => {
    setRating(newRating); // Set the actual rating on click
  };
  const handleStarMouseOver = (newHoverRating) => {
    setHoverRating(newHoverRating); // Set the hovered rating
  };
  const handleStarMouseLeave = () => {
    setHoverRating(0); // Reset the hover state
  };
  return (
    <div className="reviews-section">
      <ul className="review-list">
        {reviews.map((review, index) => (
          <li key={index}>
            <div className="review-rating">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="star filled">★</span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <span key={i} className="star">☆</span>
              ))}
            </div>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={(event) => handleReviewSubmit(event, rating)} className="review-form">
        <div className="review-label-stars">
          <label htmlFor="reviewText" className="form-label">Leave a review:</label>
          <div className="star-rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`star ${i < (hoverRating || rating) ? 'filled' : ''}`} // Fill based on hover or selected rating
                onClick={() => handleStarClick(i + 1)}
                onMouseOver={() => handleStarMouseOver(i + 1)}
                onMouseLeave={handleStarMouseLeave}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <textarea
          id="reviewText"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Share your thoughts"
          className="review-textarea"
        ></textarea>

        <button type="submit" className="submit-review-btn">Submit Review</button>
      </form>
    </div>
  );
};
export default Reviews;