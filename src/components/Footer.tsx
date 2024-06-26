import React from 'react';
import './Footer.css';

// Import your SVG logo here (update path as necessary)
import NSF from '../assets/NSF-logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={NSF} alt="Small Logo" />
      </div>
      <div className="footer-center">
        <div className='text-left'>Center for Data-Driven Drug Development and Treatment Assessment (DATA)</div>
        <div className='text-left'>University of Michigan, Michigan Institute for Data and AI in Society</div>
        <div className='text-left'>Weiser Hall, 500 Church Street, Suite 600</div>
        <div className='text-left'>Ann Arbor MI 48109</div>
      </div>
      <nav className="footer-right">
        <ul>
          <p>Contact Us</p>
          <p>data-iucrc@umich.edu</p>
          <p>(123) 456-7890</p>
          <div className='py-2'></div>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;