import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className='navbar'>
            <nav>
                <ul>
                    <li><Link to="/ClimatePage">Climate</Link></li>
                    <li><Link to="/EnvironmentPage">Environment</Link></li>
                    <li><Link to="/Workforce">Workforce</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;