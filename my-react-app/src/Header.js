import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/climate">Climate</Link></li>
                    <li><Link to="/air-emissions">Air Emissions</Link></li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;