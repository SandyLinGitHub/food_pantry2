import React from 'react';
import { Link } from 'react-router-dom';
import '.NabBar.css';

import AboutPage from './pages/about_us/about';
import RecipePage from './pages/recipe';
import ContactPage from './pages/about_us/contact_us';

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/resources/resources">Resources</Link></li>
          <li><Link to="/recipe">Recipe</Link></li>
          <li><Link to="/about/contact_us">Contact Us</Link></li>
        </ul>
      </nav>
    );
  };

  export default Navbar;