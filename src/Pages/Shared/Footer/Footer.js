import React from 'react';

const Footer = () => {
    let date = new Date().getFullYear();

    return (
        <footer className='text-center mt-5 bg-primary p-5 text-white fw-bold'>
            <small>&copy; Copyright {date}</small>
        </footer>
    );
};

export default Footer;