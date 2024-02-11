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
            <div className="intro-text">
            There are various metrics and thresholds used to assess sustainability across different sectors and industries. These metrics help measure and track an organization's or investment's environmental, social, and governance (ESG) performance.
            <ul>
                <li><strong>Access to Clean Water and Sanitation:</strong> Indicators reflecting the availability of clean water and proper sanitation facilities.</li>
                <li>Examining the amount of waste generated per capita and the percentage of waste that is recycled can provide insights into a country's waste management practices.</li>
                <li><strong>Carbon Footprint: </strong>The total greenhouse gas emissions of a country, including emissions from energy production, transportation, and industry.</li>
                <li><strong>Renewable Energy Share: </strong>The percentage of energy generated from renewable sources, indicating a country's commitment to clean energy.</li>
            </ul>
            </div>

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
                <option value="df_absolute_co2">CO2 emissions</option>
                <option value="total_ghg_emissions">Greenhouse gas emissions</option>
                <option value="modern_renewable">Renewable energy</option>
                <option value="annual_freshwater_withdrawals">Freshwater withdrawals</option>
                <option value="plastic_pollution">Plastic pollution</option>
            </select>
        </div>
            {selectedCity && selectedCategory && (
                <img class="graph" src={`/images/${selectedCategory}_${selectedCity}.png`} alt={`${selectedCategory} for ${selectedCity}`} />
            )}
        </div>
        </div>
        
    );
}

export default ClimatePage;