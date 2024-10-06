//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home';
import ContactPage from './pages/contact_us';
import SchedulePage from './pages/schedule';
import NewsPage from './pages/news';
import ResourcePage from './pages/resources';
import HistoryPage from './pages/history';
import StatsPage from './pages/stats';
import VolunteersPage from './pages/volunteers';
import RecipePage from './pages/recipe';
import FeedbackPage from './pages/feedback';
import SupportFPPage from './pages/support_pantry';
import headerPic from './assets/header.png';
import footerPic from './assets/footer.png';
import foodPantryImage1 from './assets/sandy.JPG'
import foodPantryImage2 from './assets/ramen.JPG'
import foodPantryImage3 from './assets/penne.png'

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <img src={headerPic} alt="Header" className="header-image" />
      </header>
    
      <div className="image-container">
        <img src={foodPantryImage1} alt="Food Pantry 1" className="food-pantry-image" />
        <img src={foodPantryImage2} alt="Food Pantry 2" className="food-pantry-image" />
        <img src={foodPantryImage3} alt="Food Pantry 3" className="food-pantry-image" />
        <div className="overlay-text">
          <h1>Coach Mac Food Pantry</h1>
        </div>
      </div>
    
      <div className="main-layout">
        {/* Sidebar */}
        <nav className="sidebar">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/recipe">Recipe</Link></li>
            <li><Link to="/stats">Stats</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/volunteers">Volunteers</Link></li>
            <li><Link to="/contact_us">Contact Us</Link></li>
          </ul>
        </nav>
      </div>

      <nav>
        <Link to="/about">About</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/recipe">Recipe</Link>
        <Link to="/contact_us">Contact Us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how_to_support_the_Coach_Mac_Food_Pantry" element={<SupportFPPage />} />
        <Route path="/schedule" element={<SchedulePage />} /> 
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/volunteers" element={<VolunteersPage />} />
        <Route path="/contact_us" element={<ContactPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>

      <footer className="footer">
        <img src={footerPic} alt="Footer" className="footer-image" />
      </footer>
    </BrowserRouter>
  );
}

export default App;
