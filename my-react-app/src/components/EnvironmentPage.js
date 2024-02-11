import React, { useState } from 'react';
import Header from './Header';

function EnvironmentPage() {
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
            <h2>Environment Page</h2>
            <p>Environment content</p>

            <select onChange={handleCitySelect}>
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

            <select onChange={handleCategorySelect}>
                <option value="">Select a category</option>
                <option value="co2_emissions">CO2 emissions</option>
            </select>

        </div>
    );
}

export default EnvironmentPage;
