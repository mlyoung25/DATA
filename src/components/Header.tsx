import React from 'react';
import './Header.css';
import Logo from '../assets/logo.svg';
import NSF from '../assets/NSF-logo.svg';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo-container">
        <div className="nsf-logo">
          <img src={NSF} alt="NSF Small Logo" />
        </div>
        <div className="header-logo">
          <Link to="/DATA/">
            <img src={Logo} className="logo react" alt="React logo" />
          </Link>
        </div>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/DATA/about/" className='text-gray-600'>About Us</Link></li>
          <li><Link to="/DATA/membership/" className='text-gray-600'>Membership</Link></li>
          <li><Link to="/DATA/news/" className='text-gray-600'>News</Link></li>
          <li><Link to="/DATA/tools/" className='text-gray-600'>Tools</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;