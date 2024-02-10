import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header'; 
import Climate from './Climate';
import AirEmissions from './AirEmissions';

function App() {
    return (
        <div>
            <Header /> <Route path="/climate" component={ClimatePage} />
        <Route path="/air-emissions" component={AirEmissionsPage} />
        </div>
    );
}

export default App;