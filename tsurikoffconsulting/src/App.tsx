import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Header */}
        Header
        {/* Links */}
        <ul>
          <li>About Us | </li>
          <li>Services | </li>
          <li>Key Technologies | </li>
          <li>Pricing | </li>
          <li>Contact Us</li>
        </ul>
      </header>

      <body>
        {/* Sections */}


        {/* About Us */}
        <div className="content-light">
          About us
        </div>

        {/* Services */}
        <div className="content-dark">
          Services
        </div>
        
        {/* Key Technologies */}
        <div className="content-light">
          Key Technologies
        </div>

        {/* Pricing */}
        <div className="content-dark">
          Pricing
        </div>

        {/* Contact Us */}
        <div className="content-light">
          Contact Us
        </div>

      </body>

      <footer className="footer">
        This is footer
      </footer>
    </div>
  );
}

export default App;
