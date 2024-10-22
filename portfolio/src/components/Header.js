import React from 'react'
import '../styles/header.css'

const Header = ({ onRequestClose }) => {
    const handleCloseModal = () => {
        onRequestClose();
    };

    return (
        <div className='header'>
            <button className='circle' style={{ backgroundColor: '#FE5F57', border: 0, cursor: 'pointer'}} onClick={handleCloseModal}></button>
            <div className='circle' style={{ backgroundColor: '#FEBC2E'}}></div>
            <div className='circle' style={{ backgroundColor: '#28C840'}}></div>
        </div>
    )
}

export default Header