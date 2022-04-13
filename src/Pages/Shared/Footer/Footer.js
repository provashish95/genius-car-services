import React from 'react';

const Footer = () => {
    let date = new Date().getFullYear();

    return (
        <footer>
            <small>&copy; Copyright {date}</small>
        </footer>
    );
};

export default Footer;