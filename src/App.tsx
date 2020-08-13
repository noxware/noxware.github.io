import React from 'react';
import Intro from './steps/Intro';
import About from './steps/About';
import Skills from './steps/Skills';


function App() {
  return (
    <div className="app">
      <Intro />
      <About />
      <Skills />
    </div>
  );
}

export default App;
