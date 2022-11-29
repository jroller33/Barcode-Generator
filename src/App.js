import React, { useState } from 'react';
import JsBarcode from 'jsbarcode';
import logo from './logo.svg';
import './App.css';

var ReactDOM = require('react-dom');
var Barcode = require('react-barcode');
// import React, { useState } from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Toast from 'react-bootstrap/Toast';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// const JsBarcode = require('jsbarcode');
// const { Canvas } = require("canvas");

// have separate pages for backroom barcodes, UPCs, DPCIs etc linked on navbar

function App() {

  return (
    <div className='container py-4'>
      <div>
      <div><img src={logo} className="App-logo" alt="logo" /></div>

      <h1 className='display-5 fw-bold'>ReactJS Barcode Generator</h1>
      </div>
      <div>
        <Barcode value="hello" />
      </div>

    </div>
  );
}

export default App;

/*  OLD HOMEPAGE    */
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

/* <Navbar bg="primary" variant="dark">
<Container>
  <div><img src={logo} className="App-logo" alt="logo" /></div>
  <Navbar.Brand href="#navbar">ReactJS Barcode Generator</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#link1">link1</Nav.Link>
    <Nav.Link href="#link2">link2</Nav.Link>
    <Nav.Link href="#link3">link3</Nav.Link>
  </Nav>
</Container>
</Navbar> */

// <Container>
// <Navbar bg="primary" variant="dark">
//   <Container>
//     <div><img src={logo} className="App-logo" alt="logo" /></div>
//     <Navbar.Brand href="#navbar">ReactJS Barcode Generator</Navbar.Brand>
//     <Nav className="me-auto">
//       <Nav.Link href="#link1">link1</Nav.Link>
//       <Nav.Link href="#link2">link2</Nav.Link>
//       <Nav.Link href="#link3">link3</Nav.Link>
//     </Nav>
//   </Container>
// </Navbar>

// <Container>
//   {barcode}
// </Container>

// </Container>



/* <div className='container'>

<div className='headerDiv'>
  <div>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
  <div className='h1Div'>
    <h1 className='header'>ReactJS  Barcode Generator</h1>
  </div>
</div>

<div className='button1'>
<p>Button 1</p>
</div>

<div className='button2'>
  <p>Button 2</p>
</div>


</div> */


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }