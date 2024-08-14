// LogoSection.tsx
import React from 'react';
import Logo from '../assets/logo.svg';
import NSF from '../assets/NSF-logo.svg';
import { Link } from "react-router-dom";

import './LogoSection.css';

const LogoSection: React.FC = () => {
    return (
        <div className="logo-section">
            <div className="nsf-logo">
                <img src={NSF} alt="NSF Logo" />
            </div>
            <div className="header-logo">
                <Link to="/DATA/">
                    <img src={Logo} className="logo react" alt="Logo" />
                </Link>
            </div>
        </div>
    );
}

export default LogoSection;