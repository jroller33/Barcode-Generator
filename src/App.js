import React from 'react';
import Card from './components/Card'

import './App.css';

// TO DO:
// make separate components and move State up
// create a CSS breakpoint, so on desktop the cards can be laid out differently than a column. (a column is needed for mobile)
// have an options menu to be able to quickly select different kinds of barcodes
// change the type of keyboard on mobile for numerical barcodes (media query?)


function App() {

  return (
    <div className='App' >
      {/* d-flex justify-content-center align-items-center keeps h1 text centered */}
      <div className='headerDiv d-flex justify-content-center align-items-center text-white'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className='headerText display-5 fw-bold'>Click Below ⬇️</h1>

      </div>
      {/* <h1 className='rounded display-5 fw-bold'>Barcode Generator</h1> */}

      <Card />
      <Card />
      <Card />
      <Card />
      
    </div>
  );
}

export default App;
