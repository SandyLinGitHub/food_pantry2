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

function App() {
  return (
    <BrowserRouter>

    
    
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
    </BrowserRouter>
  );
}

export default App;
