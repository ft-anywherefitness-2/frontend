import React from 'react';
import '../Styles/HomePage.css';

function HomePage() {
    return (
        <div className="homepage-container">

            <div className="cta-home">
                <h2>Your Next Training Session is Waiting</h2>
                <button className="cta-btn"><a href="/login"> Login </a></button>
            </div>
            
        </div>
    )
}

export default HomePage;

