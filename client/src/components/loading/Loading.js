import React, { useState, useEffect } from 'react';
import './Loading.css';

function Loading() {
    const [loadingPercentage, setLoadingPercentage] = useState(0);
    useEffect(() => {
    const interval = setInterval(() => {
        setLoadingPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        if (newPercentage === 100) {
            clearInterval(interval); // Stop the interval when loading is complete
        }
        return newPercentage;
        });
    }, 30);

    return () => clearInterval(interval);
    }, []);

    return (
    <div className="loading-container">
        <div className="loading-content">
            <img src={process.env.PUBLIC_URL + '/images/main/heartbeat_noBG.gif'} alt="Loading" />
            <p>Loading - {loadingPercentage}%</p>
        </div>
    </div>
    );
}

export default Loading;