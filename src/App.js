import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      {/* Other content */}
    </div>
  );
}

export default App;
