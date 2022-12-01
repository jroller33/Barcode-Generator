import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from './logo.svg';
import './App.css';

import Barcode from 'react-barcode';

function App() {

  // this updates the barcode with the text in the input field
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  }

  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className='App' >

      <div className='headerDiv'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='rounded display-5 fw-bold'>Barcode Generator</h1>
      </div>

      <motion.div 
        transition={{ layout: { duration: 1, type: "spring" } }} 
        layout 
        onClick={() => setIsOpen(true)} 
        className='card'
        style={{borderRadius: "2rem", boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
        >

        <motion.h3 layout="position">Click Here</motion.h3>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='barcodeDiv'
            >
            <p>Type or paste below to create a barcode:</p>
            <input type="text" className="border border-primary shadow-lg form-control" id="barcodeInput" name="barcodeInput" onChange={handleChange} value={message} />
            <div className='barcode'>
            <Barcode value={message} />.
            </div>
          </motion.div>
        )}
      </motion.div>

    </div>
  );
}

export default App;


/* <motion.div 
transition={{ layout: { duration: 1, type: "spring" } }} 
layout 
onClick={() => setIsOpen(!isOpen)} 
className='card'
style={{borderRadius: "2rem", boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
>
<div className='inputDiv py-4'>
<motion.h4 layout="position">Type or paste below to create a barcode: </motion.h4>
<input type="text" className="border border-primary shadow-lg form-control" id="barcodeInput" name="barcodeInput" onChange={handleChange} value={message} />
</div>

<div className='barcodeDiv py-4'>
<Barcode value={message} />
</div>
</motion.div> */


/* <div className='devDiv'>
<h3>🚧under development🚧</h3>
</div> */



// import React, { useState } from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Toast from 'react-bootstrap/Toast';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// const JsBarcode = require('jsbarcode');
// const { Canvas } = require("canvas");

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