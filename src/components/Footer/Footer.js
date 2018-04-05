import React from 'react';
import './Footer.scss';
import snapcode from '../../assets/snapcode.png'

const footer = (props) => {
    return (
        <div id="foot">
           <footer className="container">
                <ul className="ul-container">
                    <li><a href="https://twitter.com/novellit0" target="_blank" rel="noopener noreferrer"><i className="fa fa-2x fa-twitter"></i></a></li>
                    <li><a href="https://www.facebook.com/christian.n.trinidad" target="_blank" rel="noopener noreferrer"><i className="fa fa-2x fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/cnovellito/" target="_blank" rel="noopener noreferrer"><i className="fa fa-2x fa-instagram"></i></a></li>
                    <li><a href={snapcode} target="_blank" rel="noopener noreferrer"><i className="fa fa-2x fa-snapchat"></i></a></li>
                </ul>
           <span className="love">Made with <i className="fa fa-heart"></i> </span>
           </footer>
        </div>
    );
};

export default footer;