import React from 'react';
import resume from '../../assets/christianTrinidad_Resume2018.pdf';
import './Navbar.scss';

const Navbar = (props) => {
    return (
        <nav className="page-header">
            <a className="page-scroll" href="#aboutsSection">About</a>
            <a className="page-scroll" href="#skills">Dev</a>
            <a className="page-scroll" href="#projects">Projects</a>
            <a href={resume} target="_blank" rel="noopener noreferrer">Résumé</a>
        </nav>
    );
};

export default Navbar;