import React from 'react';
import './Header.css';
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(`/DATA${path}`);
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li><button onClick={() => handleNavigation('#about')} className='text-gray-600'>About Us</button></li>
          <li><button onClick={() => handleNavigation('#membership')} className='text-gray-600'>Membership</button></li>
          <li><Link to="/DATA/news" className='text-gray-600'>News</Link></li>
          <li><Link to="/DATA/tools" className='text-gray-600'>Tools</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;