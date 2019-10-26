import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
function App() {
  return (
    <div className="App Site">
      <Header title="Demo project" />
      <div className="Site-content">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
