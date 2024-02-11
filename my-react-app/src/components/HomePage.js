// HomePage.js
import React from "react";
import Header from "./Header";

function HomePage() {
    return (
        <div>
            <Header />
            <h1>Home Page</h1>
            <p style={{ position: 'absolute', bottom: 0, left: 0, padding: '10px' }}>
                We are here to educate! Learn more about how COP takes into account sustainabitlity and keeps in touch with the environment.
            </p>
        </div>
    );
}

export default HomePage;
