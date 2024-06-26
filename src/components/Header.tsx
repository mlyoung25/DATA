import React from 'react';
import './Header.css';

// Import your SVG logo. The specific import method may vary based on your setup.
import Logo from '../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">
          <img src={Logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="/about/" className='text-gray-600'>About Us</a></li>
          <li><a href="/membership/" className='text-gray-600'>Membership</a></li>
          <li><a href="/link2/" className='text-gray-600'>News</a></li>
          <li><a href="/link4/" className='text-gray-600'>Tools</a></li>
          <li className='bg-blue-500 rounded-lg'><a href="/link5" className='text-white'>Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;