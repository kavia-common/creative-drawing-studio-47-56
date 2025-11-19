import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [navbarHidden, setNavbarHidden] = useState(false); // For demonstrating 'hide' prop

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Example button for demo: hide/show Navbar without breaking existing usage.
  // Default: Navbar is shown. (navbarHidden: false)
  return (
    <div className="App">
      <Navbar
        title="Creative Drawing Studio"
        hide={navbarHidden}
      />
      <header className="App-header">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        {/* Demo control for the hide prop */}
        <div style={{ margin: "1em auto", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.75em" }}>
          <label>
            <input
              type="checkbox"
              checked={navbarHidden}
              onChange={() => setNavbarHidden(h => !h)}
              aria-checked={navbarHidden}
              aria-label={navbarHidden ? "Show Navbar" : "Hide Navbar"}
              style={{ marginRight: "0.5em" }}
            />
            Hide Navbar (demo)
          </label>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
