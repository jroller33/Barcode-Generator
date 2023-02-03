import React, { useState } from 'react';
import Barcode from 'react-barcode';
// import { motion } from 'framer-motion';
// i'm leaving framer-motion installed in npm, bc I might use it later

import '../App.css';

function Card() {
    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
    }


    return (

        <div
        className='card bg-dark bg-gradient bg-opacity-10 text-secondary'
        style={{ borderRadius: "2rem", boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
        >
      <div className='.card-subtitle'
      layout="position"></div>
        <div
            className='barcodeDiv'  
            >
            <input type="text" className="border border-danger shadow-lg form-control" id="barcodeInput" name="barcodeInput" onChange={ handleChange } value={ message } />
            {/* if text area is empty barcode should be hidden */}
            <div className='barcode'>
              {/* 
              
              { message } is being passed directly from the input field to the Barcode component.

              This is very sloppy and needs to be corrected.

              ⚠️⚠️⚠️ THE LINE BELOW COULD BE VULNERABLE TO CLIENT XSS ATTACKS ⚠️⚠️⚠️
              
              */}
            <Barcode value={ message } />
            </div>
          </div>
      
    </div>
    )

}

export default Card;