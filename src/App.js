import './App.css';

function App() {
  return (
    <div className="App">
      <header className="homepage_header">
        <div className="left_nav">
          <img src={process.env.PUBLIC_URL + '/logo.png'} className="logo" alt="app_logo" />
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
        <div>
          <a className="nav-icon" href="/notifiche"><button>n</button></a>
          <a className="nav-icon" href="/impostazioni"><button>i</button></a>
          <a className="nav-icon" href="/area-personale"><button>Area Personale</button></a>
        </div>
      </header>
      <main>
        <h1>Test</h1>
      </main>
      <footer>
        <p>Test2</p>
      </footer>
    </div>
  );
}

export default App;
