import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 theme_bg'>
            <p className='py-3 mb-0'>Copyright @ {year}. All rights reserved <Link  className='text-decoration-none theme_color' to={'/'}>DentiCare</Link> </p>
        </footer>
    );
};

export default Footer;