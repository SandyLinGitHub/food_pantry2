import React from 'react';
import './stats.css';
function StatsPage() {
  return (
    <div className="stats-page">
      {/* Main Stat Section */}
      <div className="main-stat">
        <h2>Main Stat</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
          nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.
        </p>
        <div className="stat-cards">
          <div className="stat-card">
            <h3>150+</h3>
            <p>Title here</p>
          </div>
          <div className="stat-card">
            <h3>95+</h3>
            <p>Title here</p>
          </div>
          <div className="stat-card">
            <h3>100+</h3>
            <p>Title here</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Title here</p>
          </div>
        </div>
      </div>

      {/* Individual Stat Cards */}
      <div className="stat-grid">
        <div className="stat-item">
          <h3>Stat 1</h3>
          <p>
            Lorem ipsum dolor sit amet nulla adipiscing elit. Nunc maximus, nulla nec ut commodo.
          </p>
          <button>Get Started</button>
          <button>Learn more</button>
        </div>
        <div className="stat-item">
          <h3>Stat 2</h3>
          <p>
            Lorem ipsum dolor sit amet nulla adipiscing elit. Nunc maximus, nulla nec ut commodo.
          </p>
          <button>Get Started</button>
          <button>Learn more</button>
        </div>
        <div className="stat-item">
          <h3>Stat 3</h3>
          <p>
            Lorem ipsum dolor sit amet nulla adipiscing elit. Nunc maximus, nulla nec ut commodo.
          </p>
          <button>Get Started</button>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default StatsPage;
