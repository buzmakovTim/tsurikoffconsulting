import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
    
      <ScrollToTop />
      
      <Header />
      
      {/* <Main /> */}

      <body>
        {/* Sections */}


        {/* About Us */}
        <div className="content-light container" id="aboutUs">
          <h1>About us</h1>
          
        </div>

        {/* Services */}
        <div className="content-dark container" id="services">
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
        <div className="content-light container" id="keyTechnologies">
          <h1>Key Technologies</h1>
        </div>

        {/* Pricing */}
        <div className="content-dark container" id="pricing">
          <h1>Pricing</h1>
        </div>

        {/* Contact Us */}
        <div className="content-light container" id="contactUs">
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
