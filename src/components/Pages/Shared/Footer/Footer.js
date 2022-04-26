import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <p>&copy;Genius Car Services {(new Date().getFullYear())} </p>
            </footer>
        </div>
    );
};

export default Footer;