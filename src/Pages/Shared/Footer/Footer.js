import React from 'react';

const Footer = () => {
    let date = new Date().getFullYear();
    //console.log(date);
    return (
        <footer>
            <small>&copy; Copyright {date}</small>
        </footer>
    );
};

export default Footer;