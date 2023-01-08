import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Barcode from 'react-barcode';
import logo from './logo.svg';
import './App.css';

// TO DO:
// create a CSS breakpoint, so on desktop the cards can be laid out differently than a column. (a column is needed for mobile)
// have an options menu to be able to quickly select different kinds of barcodes
// change the type of keyboard on mobile for numerical barcodes (media query?)

const showClickText = () => {
  const [showClick1, setShowClick1] = React.useState(true)
  const onClick1 = () => setShowClick1(false)
  return(
    <motion.h3 className='.card-subtitle' layout="position">Click Here</motion.h3>
  )
}


function App() {

  // this updates the barcode with the text in the input fields
  const [message1, setMessage1] = useState('');
  const handleChange1 = event => {
    setMessage1(event.target.value);
  }
  const [message2, setMessage2] = useState('');
  const handleChange2 = event => {
    setMessage2(event.target.value);
  }
  const [message3, setMessage3] = useState('');
  const handleChange3 = event => {
    setMessage3(event.target.value);
  }


  // isOpen is for motion on cards
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);


  return (
    <div className='App' >

      <div className='headerDiv bg-dark bg-gradient text-white'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='rounded display-5 fw-bold'>Barcodes</h1>
      </div>
      {/* <h1 className='rounded display-5 fw-bold'>Barcode Generator</h1> */}


    <motion.div 
        transition={{ layout: { duration: 1, type: "spring" } }} 
        layout 
        onClick={() => setIsOpen1(true)} 
        className='card bg-dark bg-gradient text-secondary'
        style={{borderRadius: "2rem", boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
        >

      <motion.div className='.card-subtitle'
      layout="position"></motion.div>
      {isOpen1 && (
        <motion.div
        initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='barcodeDiv'  
            >
            <input type="text" className="border border-danger shadow-lg form-control" id="barcodeInput" name="barcodeInput" onChange={handleChange1} value={message1} />
            <div className='barcode'>
            <Barcode value={message1} />
            </div>
          </motion.div>
      )}
    </motion.div>




    <motion.div 
        transition={{ layout: { duration: 1, type: "spring" } }} 
        layout 
        onClick={() => setIsOpen2(true)} 
        className='card bg-dark bg-gradient text-secondary'
        style={{borderRadius: "2rem", boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
        >

      <motion.div className='.card-subtitle'
      layout="position"></motion.div>
      {isOpen2 && (
        <motion.div
        initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='barcodeDiv'  
            >
            <input type="text" className="border border-danger shadow-lg form-control" id="barcodeInput" name="barcodeInput" onChange={handleChange2} value={message2} />
            <div className='barcode'>
            <Barcode value={message2} />
            </div>
          </motion.div>
      )}
    </motion.div>




    <motion.div 
        transition={{ layout: { duration: 1, type: "spring" } }} 
        layout 
        onClick={() => setIsOpen3(true)} 
        className='card bg-dark bg-gradient text-secondary'
        style={{borderRadius: "2rem", boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
        >

      <motion.div className='.card-subtitle'
      layout="position"></motion.div>
      {isOpen3 && (
        <motion.div
        initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='barcodeDiv'  
            >
            <input type="text" className="border border-danger shadow-lg form-control" id="barcodeInput" name="barcodeInput" onChange={handleChange3} value={message3} />
            <div className='barcode'>
            <Barcode value={message3} />
            </div>
          </motion.div>
      )}
    </motion.div>

{/* 
      <motion.div 
        transition={{ layout: { duration: 1, type: "spring" } }} 
        layout 
        onClick={() => setIsOpen1(true)} 
        className='card bg-dark bg-gradient text-secondary'
        style={{borderRadius: "2rem", boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
        >

        <motion.h3 className='.card-subtitle' layout="position">Click Here</motion.h3>
        {isOpen1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='barcodeDiv'
            >
            <h4 className='.card-subtitle'>Type or paste below to create a barcode:</h4>
            <input type="text" className="border border-danger shadow-lg form-control" id="barcodeInput" name="barcodeInput" onChange={handleChange} value={message1} />
            <div className='barcode'>
            <Barcode value={message1} />.
            </div>
          </motion.div>
        )}
      </motion.div> */}

      
    </div>
  );
}

export default App;


// -------------------------- EXTRA BARCODES ----------------------------

// <motion.div 
//         transition={{ layout: { duration: 1, type: "spring" } }} 
//         layout 
//         onClick={() => setIsOpen2(true)} K
//         className='card'
//         style={{borderRadius: "2rem", boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
//         >

//         <motion.h3 layout="position">Click Here</motion.h3>
        
//         {isOpen2 && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className='barcodeDiv'
//             >
//             <input type="text" className="border border-primary shadow-lg form-control" id="barcodeInput" name="barcodeInput" onChange={handleChange} value={message1} />
//             <div className='barcode'>
//             <Barcode value={message1} />.
//             </div>
//           </motion.div>
//         )}
//       </motion.div>


//       <motion.div 
//         transition={{ layout: { duration: 1, type: "spring" } }} 
//         layout 
//         onClick={() => setIsOpen3(true)} 
//         className='card'
//         style={{borderRadius: "2rem", boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
//         >

//         <motion.h3 layout="position">Click Here</motion.h3>
//         {isOpen3 && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className='barcodeDiv'
//             >
//             <input type="text" className="border border-primary shadow-lg form-control" id="barcodeInput" name="barcodeInput" onChange={handleChange} value={message1} />
//             <div className='barcode'>
//             <Barcode value={message1} />.
//             </div>
//           </motion.div>
//         )}
//       </motion.div>


// --------------------------------- END ---------------------------------------



/* <motion.div 
transition={{ layout: { duration: 1, type: "spring" } }} 
layout 
onClick={() => setIsOpen(!isOpen)} 
className='card'
style={{borderRadius: "2rem", boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
>
<div className='inputDiv py-4'>
<motion.h4 layout="position">Type or paste below to create a barcode: </motion.h4>
<input type="text" className="border border-primary shadow-lg form-control" id="barcodeInput" name="barcodeInput" onChange={handleChange} value={message1} />
</div>

<div className='barcodeDiv py-4'>
<Barcode value={message1} />
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