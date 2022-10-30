import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';

import ScrollToTop from './components/scrollToTop/ScrollToTop';
import { Section } from './components/section/Section';
import { StateType } from './state/State';

type AppPropsType = {
  state: StateType
}

function App(props: AppPropsType) {
  
  const sections = props.state.sections.map( (section, index)  => {
    return (
      <>
        <Section section={section} index={index}/>
      </>
    )
  })
  

  return (
    <div className="App">
    
      <ScrollToTop />
      
      <Header />
      
      {/* <Main /> */}

      <body>
        
        {/* render sections */}
        {sections}

      </body>

      <footer className="footer">
        This is footer
      </footer>
    </div>
  );
}

export default App;
