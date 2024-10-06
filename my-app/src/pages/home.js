import React from 'react';
import './home.css';

function HomePage() {
  return (
    <div className="home-page">
      {/* Food Pantry Image Section */}
      <div className="image-section">
        <h2>Food Pantry Image</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis,
          sapien dui mattis dui, non pulvinar lorem felis nec erat.
        </p>
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Learn more</button>
      </div>

      {/* Latest News Section */}
      <div className="latest-news">
        <h2>Latest News</h2>
        <div className="news-card">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, 
            sapien dui mattis dui, non pulvinar lorem felis nec erat.
          </p>
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn more</button>
        </div>
      </div>

      {/* Current Stats Section */}
      <div className="current-stats">
        <h2>Current Stats</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>150+</h3>
            <p>Title here</p>
          </div>
          <div className="stat-item">
            <h3>95+</h3>
            <p>Title here</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Title here</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Title here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
