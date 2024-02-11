import React, { useState } from 'react';
import Header from './Header';

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
        <div>
            <Header />

            <select onChange={handleCitySelect}>
                <option value="">Select a country</option>
                <option value="UnitedStates">United States</option>
                {/* Add more options as needed */}
            </select>

            <select onChange={handleCategorySelect}>
                <option value="">Select a category</option>
                <option value="co2_emissions">CO2 emissions</option>
                {/* Add more options as needed */}
            </select>

            {selectedCity && selectedCategory && (
                <img src={`/images/${selectedCategory}_${selectedCity}.png`} alt={`${selectedCategory} for ${selectedCity}`} />
            )}
        </div>
    );
}

export default ClimatePage;