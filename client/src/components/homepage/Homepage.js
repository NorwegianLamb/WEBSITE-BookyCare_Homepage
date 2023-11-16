import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, [])

  var doctors = []
  if(typeof backendData.doctors === 'undefined'){
    doctors = [
      {name: '(1)',
                            specialization: '//',
                            experience: '3'},

                            {name: '(2)',
                            specialization: '//',
                            experience: '15'},
                            
                            {name: '(3)',
                            specialization: '//',
                            experience: '40'},

                            {name: '(4)',
                            specialization: '//',
                            experience: '12'}
    ];
  }else {
    backendData.doctors.map((doctor, i) => {
      doctors[i] = doctor;
    });
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesBG = ['bg1.png', 'bg2.png', 'bg3.png', 'bg4.png'];
  const imagesDOC = ['doctor-1.png', 'doctor-2.png', 'doctor-3.png', 'doctor-4.png'];
  const boxColors = ['#0d1321', '#5f0f40', '#354f52', '#1b4965'];

  // Automatic image rotation every 5 seconds
  useEffect(() => { 
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imagesBG.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, imagesBG.length]);

  return (
    <>
        <header className="homepage_header">
            <div className="left_nav">
            <img src={process.env.PUBLIC_URL + '/images/navbar/booky-logo.png'} className="logo" alt="app_logo" />
            <nav className="navbar">
                <ul className="nav_links">
                <li><a href="/"><img src={process.env.PUBLIC_URL + '/images/navbar/icons/docs.png'} className="nav_icons" alt="app_logo" /></a></li>
                <li><a href="/ai"><img src={process.env.PUBLIC_URL + '/images/navbar/icons/ai.png'} className="nav_icons" alt="app_logo" /></a></li>
                <li><a href="/teams"><img src={process.env.PUBLIC_URL + '/images/navbar/icons/teams.png'} className="nav_icons" alt="app_logo" /></a></li>
                <li><a href="/jobs"><img src={process.env.PUBLIC_URL + '/images/navbar/icons/jobs.png'} className="nav_icons" alt="app_logo" /></a></li>
                <li><a href="/blog"><img src={process.env.PUBLIC_URL + '/images/navbar/icons/blog.png'} className="nav_icons" alt="app_logo" /></a></li>
                <li><a href="/points"><img src={process.env.PUBLIC_URL + '/images/navbar/icons/points.png'} className="nav_icons" alt="app_logo" /></a></li>
                </ul>
            </nav>
            </div>
            <div className='right_nav'>
              <a href="/notifiche" className="image-button">
                  <img src={process.env.PUBLIC_URL + '/images/navbar/notification-bell.png'} alt="notifiche" />
              </a>
              <a href="/impostazioni" className="image-button">
                  <img src={process.env.PUBLIC_URL + '/images/navbar/settings.png'} alt="impostazioni" />
              </a>
              <a href="/area-personale" className="image-button">
                  <img src={process.env.PUBLIC_URL + '/images/navbar/profile.png'} alt="area-personale" />
              </a>
            </div>
        </header>

        <main>
            {/*------------------------------------------------------------ LEFT MAIN CONTENT ------------------------------------------- */}
            <div className="left-content">
            <h1>PRENOTA ORA</h1>
            <h3>Scegli il professionista che fa al caso tuo</h3>
            <form className="search-form" action="your-submit-url" method="POST">
                <div className="input-container">
                <input name="luogo" type="text" placeholder="Padova, PD" required />
                <hr id="hr-vertical" />
                <input name="specialista" type="text" placeholder="Dietologo, Psicologo..." required autoFocus />
                </div>
                <div className="button-container">
                <button type="submit">Cerca ora il tuo specialista</button>
                </div>
            </form>
            </div>
            {/*------------------------------------------------------------ RIGHT MAIN CONTENT ------------------------------------------- */}
            <div className="right-content">
            <div className="image-container">
                <div className="box-shape">
                <div className="doctor-info">
                    <h2>{doctors[currentIndex].name}</h2>
                    <p>Specialization: {doctors[currentIndex].specialization}</p>
                    <p>Experience: {doctors[currentIndex].experience}</p>
                    {/*<button>Book Appointment</button>*/}
                </div>
                <div className="blurred-image" style={{ backgroundColor: boxColors[currentIndex] }}>

                </div>
                {/*<div className="blurred-image">
                    <img src={process.env.PUBLIC_URL + '/images/main/tempBG/' + imagesBG[currentIndex]} alt={`Image ${currentIndex + 1}`} id="main-image" />
                    </div>*/}
                <div className={`png-image`} key={currentIndex}>
                    <img
                    src={process.env.PUBLIC_URL + '/images/main/doctors/' + imagesDOC[currentIndex]}
                    alt={`Selection ${currentIndex + 1}`}
                    id="doctor-image"
                    />
                </div>
                </div>
            </div>
            </div>
        </main>
    </>
  );
}

export default Homepage;
