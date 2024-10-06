import React from 'react';
import './news.css';

function NewsPage() {
  return (
    <div className="main-content">
      <h1>Latest News</h1>
      
      <section className="news-item">
        <h2>Latest News</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.</p>
        <div className="cta-buttons">
          <button>Get Started</button>
          <button>Learn more</button>
        </div>
      </section>

      <section className="news-item">
        <h2>News 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.</p>
        <div className="cta-buttons">
          <button>Get Started</button>
          <button>Learn more</button>
        </div>
      </section>

      <section className="news-item">
        <h2>News 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.</p>
        <div className="cta-buttons">
          <button>Get Started</button>
          <button>Learn more</button>
        </div>
      </section>
    </div>
  );
}

export default NewsPage;
