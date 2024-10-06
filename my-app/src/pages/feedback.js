import React from 'react';
import './feedback.css';

function FeedbackPage() {
  return (
    <div className="feedback-page">
      <h2>Heading</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus nulla ut commodo sagittis.
      </p>

      <div className="feedback-container">
        {/* Image placeholder */}
        <div className="feedback-image">
          <img src="https://via.placeholder.com/400x300" alt="Placeholder" />
        </div>

        {/* Feedback Form */}
        <div className="feedback-form">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message..." required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
