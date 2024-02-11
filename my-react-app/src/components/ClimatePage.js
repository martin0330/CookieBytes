import React from 'react';
import Header from './Header';

function ClimatePage() {
    const countryName = 'United States'; // Replace with the actual country name

    return (
        <div>
            <Header />
            <h2>Climate Page</h2>
            <p>Climate page content</p>
            <img src={`/images/co2_emissions_${countryName}.png`} alt={`CO2 emissions for ${countryName}`} />
            <img src={`/images/ghg_emissions_${countryName}.png`} alt={`Greenhouse gas emissions for ${countryName}`} />
            <img src={`/images/renewable_${countryName}.png`} alt={`Renewable energy sources for ${countryName}`} />
            <img src={`/images/freshwater_${countryName}.png`} alt={`Freshwater withdrawals for ${countryName}`} />
            <img src={`/images/plastic_pollution_${countryName}.png`} alt={`Plastic pollution for ${countryName}`} />
        </div>
    );
}

export default ClimatePage;