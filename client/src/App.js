import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; // Import React Router components
import './App.css';
import Loading from './components/loading/Loading';
import Homepage from './components/homepage/Homepage';

function App() {
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 0)
  }, []);

  return (
    <div className="App">
      {
        loading ? (<Loading />) 
        : (<Homepage />)
      }
    </div>
  );
}

export default App;
