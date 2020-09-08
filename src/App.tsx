import React from 'react';
import Intro from './steps/Intro';
import About from './steps/About';
import Skills from './steps/Skills';


function App() {
  return (
    <main className="app">
      <Intro />
      <About />
      <Skills />
    </main>
  );
}

export default App;
