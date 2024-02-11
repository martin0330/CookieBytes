// HomePage.js
import React, { useEffect } from "react";
import Header from "./Header";
import webbackground from './webbackground.mp4';
import './HomePage.css';

function HomePage() {
    return (
        <div>
        <div className="container">
            <video src={webbackground} autoPlay loop muted />
            <div className="content">
                <Header />
                <div className="text-container">
                    <h1 className="h1-style"> Sustainable{' '}<span className= "adjective-style">  adjective </span> </h1>
                    <p className="definition-style">: of, relating to, or being a method of harvesting or using a resource so that the resource is not depleted or permanently damaged</p>
                </div>
            </div>
        </div>
        <section id="additional-info" className="additional-info-section">
                <div className="additional-info-content">
                    <h2 className="section-title">Our Mission:</h2>
                    <p>Our core mission is to invest in the development of the energy supply essential to human and economic progress, while effectively managing social and environmental concerns, including climate change.</p>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
