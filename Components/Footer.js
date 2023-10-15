

import React from 'react';

const Footer = () => {
    return (
        <>
        <div>
        <footer className="bg-blue-400 text-center text-xs p-3  w-full">
            &copy; {new Date().getFullYear()} QuizKhel - All Rights Reserved.
        </footer>
        </div>
        </>
    );
    }

export default Footer;
