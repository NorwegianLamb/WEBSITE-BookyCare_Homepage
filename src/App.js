import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/loading/Loading';

function App() {

  const doctors = [
    {
      name: 'Dr. Flavio Gjoni',
      specialization: '//',
      experience: '3 years',
    },
    {
      name: 'Dr. Alecccs Modenese',
      specialization: '//',
      experience: '15 years',
    },
    {
      name: 'Drs. Francesco Pittarello',
      specialization: '//',
      experience: '40 years',
    },
    {
      name: 'Dr. Marco Maddiotto',
      specialization: '//',
      experience: '12 years',
    },
  ];

  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesBG = ['bg1.png', 'bg2.png', 'bg3.png', 'bg4.png'];
  const imagesDOC = ['doctor-1.png', 'doctor-2.png', 'doctor-3.png', 'doctor-4.png'];
  const boxColors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33'];

  const handleSquareClick = (index) => {
    setCurrentIndex(index);
  };

  // Automatic image rotation every 5 seconds
  useEffect(() => { 
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imagesBG.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, []);

  return (
    <div className="App">
      <>
            <header className="homepage_header">
              <div className="left_nav">
                <img src={process.env.PUBLIC_URL + '/images/navbar/logo.png'} className="logo" alt="app_logo" />
                <nav className="navbar">
                  <ul className="nav_links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/appuntamenti">Appuntamenti</a></li>
                    <li><a href="/punti-salute">Punti Salute</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/dottori">Dottori</a></li>
                    <li><a href="/teams">Teams</a></li>
                    <li><a href="/centri-sanitari">Centri Sanitari</a></li>
                  </ul>
                </nav>
              </div>
              <div className='right_nav'>
                <a href="/notifiche" class="image-button">
                  <img src={process.env.PUBLIC_URL + '/images/navbar/notification-bell.png'} alt="notifiche" />
                </a>
                <a href="/impostazioni" class="image-button">
                  <img src={process.env.PUBLIC_URL + '/images/navbar/settings.png'} alt="impostazioni" />
                </a>
                <a href="/area-personale" class="image-button">
                  <img src={process.env.PUBLIC_URL + '/images/navbar/profile.png'} alt="area-personale" />
                </a>
              </div>
            </header>
            
            <main>
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

              {/* ---------------------------------------------------------------
              <div className="right-content">
                <div className="image-container">
                  <img src={process.env.PUBLIC_URL + '/images/main/' + images[currentIndex]} alt={`Image ${currentIndex + 1}`} id="main-image" />
                </div>
                <div className="image-selector">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`square ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => handleSquareClick(index)}
                    />
                  ))}
                </div>
              </div>
              --------------------------------------------------------------- */}
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
                    <div className='png-image'>
                      <img src={process.env.PUBLIC_URL + '/images/main/doctors/' + imagesDOC[currentIndex]} alt={`Image ${currentIndex + 1}`} id="doctor-image" />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </>
      {/*{
        loading ? (<Loading />) 
        : (
          <>
            <header className="homepage_header">
              <div className="left_nav">
                <img src={process.env.PUBLIC_URL + '/images/navbar/logo.png'} className="logo" alt="app_logo" />
                <nav className="navbar">
                  <ul className="nav_links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/appuntamenti">Appuntamenti</a></li>
                    <li><a href="/punti-salute">Punti Salute</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/dottori">Dottori</a></li>
                    <li><a href="/teams">Teams</a></li>
                    <li><a href="/centri-sanitari">Centri Sanitari</a></li>
                  </ul>
                </nav>
              </div>
              <div className='right_nav'>
                <a href="/notifiche" class="image-button">
                  <img src={process.env.PUBLIC_URL + '/images/navbar/notification-bell.png'} alt="notifiche" />
                </a>
                <a href="/impostazioni" class="image-button">
                  <img src={process.env.PUBLIC_URL + '/images/navbar/settings.png'} alt="impostazioni" />
                </a>
                <a href="/area-personale" class="image-button">
                  <img src={process.env.PUBLIC_URL + '/images/navbar/profile.png'} alt="area-personale" />
                </a>
              </div>
            </header>
            
            <main>
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

              {/* ---------------------------------------------------------------
              <div className="right-content">
                <div className="image-container">
                  <img src={process.env.PUBLIC_URL + '/images/main/' + images[currentIndex]} alt={`Image ${currentIndex + 1}`} id="main-image" />
                </div>
                <div className="image-selector">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`square ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => handleSquareClick(index)}
                    />
                  ))}
                </div>
              </div>
              --------------------------------------------------------------- []/}
              <div className="right-content">
                <div className="image-container">
                  <div className="box-shape">
                    <div className="blurred-image">
                      <img src={process.env.PUBLIC_URL + '/images/main/' + images[currentIndex]} alt={`Image ${currentIndex + 1}`} id="main-image" />
                    </div>
                    <div className="svg-image"></div>
                  </div>
                </div>
              </div>
            </main>

            <footer>
              <p>Test2 TEST2 t e s t 2</p>
            </footer>
          </>
        )}
      */}
    </div>
  );
}

export default App;
