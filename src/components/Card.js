import React, { useState } from 'react';
import Barcode from 'react-barcode';
import { motion } from 'framer-motion';
import '../App.css';

function Card() {
    const [message, setMessage] = useState('');

    const [isOpen, setIsOpen] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
    }



    return (

        <motion.div 
        transition={{ layout: { duration: 1, type: "spring" } }} 
        layout 
        onClick={() => setIsOpen(true)} 
        className='card bg-dark bg-gradient text-secondary'
        style={{ borderRadius: "2rem", boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
        >
      <motion.div className='.card-subtitle'
      layout="position"></motion.div>
      {isOpen && (
        <motion.div
        initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='barcodeDiv'  
            >
            <input type="text" className="border border-danger shadow-lg form-control" id="barcodeInput" name="barcodeInput" onChange={ handleChange } value={ message } />
            {/* if text area is empty barcode should be hidden */}
            <div className='barcode'>
            <Barcode value={ message } />
            </div>
          </motion.div>
      )}
    </motion.div>


    )

}

export default Card;