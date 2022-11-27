import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const JsBarcode = require('jsbarcode');
const { Canvas } = require("canvas");

const canvas = new Canvas();
const barcode = JsBarcode(canvas, "Hello");

// have separate pages for backroom barcodes, UPCs, DPCIs etc linked on navbar

function App() {
  return (
    <Container>
      <Navbar bg="primary" variant="dark">
        <Container>
          <div><img src={logo} className="App-logo" alt="logo" /></div>
          <Navbar.Brand href="#navbar">ReactJS Barcode Generator</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#link1">link1</Nav.Link>
            <Nav.Link href="#link2">link2</Nav.Link>
            <Nav.Link href="#link3">link3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        {barcode}
      </Container>

    </Container>
  );
}

export default App;

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