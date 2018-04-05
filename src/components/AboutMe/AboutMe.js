import React from 'react';
import xtian from '../../assets/xtian.png';
import resume from '../../assets/christianTrinidad_Resume2018.pdf';
import './AboutMe.scss';
import WOW from 'wowjs';

const AboutMe = (props) => {

    new WOW.WOW({live: false}).init();
    
    return (
      <div id="aboutsSection" >
        <div className="container">
            <div className="row about-contents">
                <div className="left wow fadeInLeft">
                    <img className="rounded-circle xtian" src={xtian} alt="me"/>
                    <div className="personalLinks">
                        <a href="https://github.com/novellito" target="_blank" alt="my github" rel="noopener noreferrer"><i className="fa fa-github-alt social-ink"
                        data-toggle="tooltip" data-placement="top" title = "View my GitHub"></i></a>
                        <a href="mailto:cntrinidad@gmail.com" alt="email me" rel="noopener noreferrer"><i className="fa fa-envelope-open" data-toggle="tooltip" data-placement="top" title = "Email Me"></i></a>
                        <a href="https://www.linkedin.com/in/christian-trinidad07/" alt="my linked in" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square social-ink" 
                        data-toggle="tooltip" data-placement="top" title = "View my LinkedIn" rel="noopener noreferrer"></i></a>
                    </div>
                </div>
                <div className="right wow fadeInRight">
                    <h3>About Me</h3>
                    <p>I'm an undergraduate student studying computer science at California State University Northridge, specializing
                        in web engineering. I'm a former web developer for my university's Career Center and currently a
                        technical support specialist for our Distance Learning Center. Outside the world of programming,
                        I enjoy playing basketball, listening to music, and growing my sneaker collection.</p>
                        <div className="resume">
                            <a className="resume-btn" href={resume} target="_blank" rel="noopener noreferrer"><i className="fa fa-download" ></i>   Download Résumé (PDF)</a>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
    
}

export default AboutMe;
