import React from 'react';
import './Tools.scss';
import './devicon.css';
import './devicon-colors.css';
import vscode from '../../assets/vscode.png';
import intellij from '../../assets/intellij.svg';
import WOW from 'wowjs';
 
const tools = (props) => {

    new WOW.WOW({live: false}).init();
    
    return (
        <div>
        <section id="skills">
            <h1 className="skillTitle">Development <i className="fa fa-gavel" aria-hidden="true"></i></h1>
            <div className="container">
                <div className="row main-tech d-flex justify-content-center wow fadeInDown">
                    <div>
                        <h3>Main Technologies</h3>
                            <i className="devicon-java-plain colored"></i>
                            <i className="devicon-javascript-plain colored"></i>
                            <i className="devicon-html5-plain colored"></i>
                            <i className="devicon-css3-plain colored"></i>
                    </div>
                </div>
            <div className="row">
                <div className="dev wow fadeInLeft">
                    <h3>Frontend</h3>
                    <i className="devicon-angularjs-plain colored"></i>
                    <i className="devicon-react-original colored"></i>
                    <i className="devicon-bootstrap-plain colored"></i>
                    <i className="devicon-jquery-plain colored"></i>
                </div>

                <div className="dev wow fadeInRight">
                    <h3>Backend</h3>
                    <i className="devicon-nodejs-plain colored"></i>
                    <i className="devicon-mongodb-plain colored"></i>
                    <i className="devicon-php-plain colored"></i>
                    <i className="devicon-mysql-plain colored"></i>
                </div>
                <div className="dev wow fadeInUp">
                    <h3>Tools</h3>
                    <i className="devicon-github-plain colored">
                        <img src={vscode} alt="vscode"/>
                        <img src={intellij} alt="intellij"/>
                    </i>
                </div>
            </div>
            </div>
                <p className=" wow fadeInUp">Some experience with: Agile/ Scrum methodologies, Jira, Laravel 5, Photoshop</p>
        </section>
    </div>
        
    );
}

export default tools;