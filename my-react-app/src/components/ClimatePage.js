import React, { useState } from 'react';
import Header from './Header';
import './ClimatePage.css';

function ClimatePage() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCitySelect = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleCategorySelect = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className="page-container">
            <Header />
        <div className="content-container">
        <div className="select-container">
            <select className="climate-select" onChange={handleCitySelect}>
                <option value="">Select a location</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Colombia">Colombia</option>
                <option value="Libya">Libya</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Norway">Norway</option>
                <option value="Qatar">Qatar</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Singapore">Singapore</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Australia">Australia</option>

            </select>

            <select className="climate-select" onChange={handleCategorySelect}>
                <option value="">Select a category</option>
                <option value="co2_emissions">CO2 emissions</option>
                <option value="ghg_emissions">Greenhouse gas emissions</option>
                <option value="renewable_energy">Renewable energy</option>
                <option value="freshwater_withdrawals">Freshwater withdrawals</option>
                <option value="plastic_pollution">Plastic pollution</option>
            </select>
        </div>
            {selectedCity && selectedCategory && (
                <img src={`/images/${selectedCategory}_${selectedCity}.png`} alt={`${selectedCategory} for ${selectedCity}`} />
            )}
        </div>
        </div>
    );
}

export default ClimatePage;