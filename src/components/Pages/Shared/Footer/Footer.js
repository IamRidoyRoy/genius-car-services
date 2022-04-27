import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className='text-center mt-5'>
                <p>&copy;Genius Car Services {(new Date().getFullYear())} </p>
            </footer>
        </div>
    );
};

export default Footer;