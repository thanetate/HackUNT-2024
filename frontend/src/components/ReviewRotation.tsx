import React, { useState } from 'react';
import '../styles/review.css';

const feedback = [
  {
    name: "Frankenstein",
    text: "I love how easy it is to connect with other monsters who share my interests. Monster Match is the best!"
  },
  {
    name: "Dracula",
    text: "I never thought I'd find my perfect match, but Monster Match made it possible!"
  },
  {
    name: "The Big Bad Wolf",
    text: "I've met so many amazing monsters on this site. I can't imagine my life without it!"
  },
];

const ReviewRoation: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateFeedback = () => {
    return feedback[currentIndex];
  };

  const changeFeedback = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) {
        return feedback.length - 1;
      } else if (newIndex >= feedback.length) {
        return 0;
      }
      return newIndex;
    });
  };

  const currentTestimonial = updateFeedback();

  return (
    <div className="feedback-container">
      <div className="card" id="feedback-card">
        <div className="feedback-content">
          <h3 className="feedback-name">{currentTestimonial.name}</h3>
          <p className="feedback-text">"{currentTestimonial.text}"</p>
        </div>
      </div>
      <button className="prev" onClick={() => changeFeedback(-1)}>&#10094;</button>
      <button className="next" onClick={() => changeFeedback(1)}>&#10095;</button>
    </div>
  );
};

export default ReviewRoation;