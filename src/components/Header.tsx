import React from 'react';
import './Header.css';
import Logo from '../assets/logo.svg';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/DATA/">
          <img src={Logo} className="logo react" alt="React logo" />
        </Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/DATA/about/" className='text-gray-600'>About Us</Link></li>
          <li><Link to="/DATA/membership/" className='text-gray-600'>Membership</Link></li>
          <li><Link to="/DATA/link2/" className='text-gray-600'>News</Link></li>
          <li><Link to="/DATA/link4/" className='text-gray-600'>Tools</Link></li>
          <li className='bg-blue-500 rounded-lg'><Link to="/DATA/login/" className='text-white'>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;