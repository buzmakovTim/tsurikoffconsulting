import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from './components/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Header */}
        Logo
        <Button name={"Book Introduction call"} />
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
        <div className="content-light container">
          <h1>About us</h1>
          
        </div>

        {/* Services */}
        <div className="content-dark container">
          <h1>Services</h1>
          
          Inventory management 
          Budgeting 
          Bookkeeping for start-ups, small to medium size businesses 
          Bookkeeping 
          Payroll services 
          Back office services 
          GST/PST filing 
          Management reports 
          Work Safe BC filings
        </div>
        
        {/* Key Technologies */}
        <div className="content-light container">
          <h1>Key Technologies</h1>
        </div>

        {/* Pricing */}
        <div className="content-dark container">
          <h1>Pricing</h1>
        </div>

        {/* Contact Us */}
        <div className="content-light container">
          <h1>Contact Us</h1>
        </div>

      </body>

      <footer className="footer">
        This is footer
      </footer>
    </div>
  );
}

export default App;
