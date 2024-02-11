import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClimatePage from './components/ClimatePage';
import EnvironmentPage from './components/EnvironmentPage';
import Workforce from './components/Workforce';
import HomePage from './components/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ClimatePage" element={<ClimatePage />} />
        <Route path="/EnvironmentPage" element={<EnvironmentPage />} />
        <Route path="/Workforce" element={<Workforce />} />
        <Route path ="/" element={<HomePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
