// HomePage.js
import React from "react";
import Header from "./Header";
import './HomePage.css';

function HomePage() {
    return (
        <div className="container">
            <video autoPlay muted loop id="myVideo" className="background-video">
                <source src="webbackground.mp4" type="video/mp4" />
            </video>
            <div className="content">
                <Header />
                <div className="text-container">
                    <h1 className="h1-style"> Sustainable{' '}<span className= "adjective-style">  adjective </span> </h1>
                    <p className="definition-style">: of, relating to, or being a method of harvesting or using a resource so that the resource is not depleted or permanently damaged</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
