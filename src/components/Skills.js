import React, {Component} from 'react';
import vscode from '../img/vscode.png';
import intellij from '../img/intellij.svg';
import '../css/devicon.css';
import '../css/devicon-colors.css';
import sr from '../js/scrollreveal.js';
import {fromLt, fromRt, fromBot, fromTop} from '../js/directions.js';

class Skills extends Component {

    componentDidMount = () => {
        sr.reveal(this.refs.fromLeft, fromLt);
        sr.reveal(this.refs.fromRight, fromRt);
        sr.reveal(this.refs.fromTop, fromTop);
        sr.reveal(this.refs.fromBot, fromBot);

    }
    render() {
        return (
            <div>
                <section id="skills">

                    <h1 className="skillTitle">Development <i className="fa fa-gavel" aria-hidden="true"></i>
                    </h1>

                    <div className="container">

                        <div className="row text-center dev fromTop" ref="fromTop">
                            <h3>Main Technologies</h3>
                            <i className="devicon-java-plain colored"></i>
                            <i className="devicon-javascript-plain colored"></i>
                            <i className="devicon-html5-plain colored"></i>
                            <i
                                className="devicon-css3-plain colored"
                                style={{
                                display: 'inline-block'
                            }}></i>
                        </div>

                        <div className="col-lg-4 row text-center dev fromLeft" ref="fromLeft">
                            <h3>Frontend</h3>

                            <i className="devicon-bootstrap-plain colored"></i>
                            <i className="devicon-jquery-plain colored"></i>
                            <i className="devicon-angularjs-plain colored"></i>
                            <i
                                className="devicon-react-original colored"
                                style={{
                                display: 'inline-block'
                            }}></i>
                        </div>
                        <div className="col-lg-4 row text-center dev fromBot" ref="fromBot">
                            <h3>Backend</h3>
                            <i className="devicon-nodejs-plain colored"></i>
                            <i className="devicon-php-plain colored"></i>
                            <i className="devicon-mysql-plain colored"></i>
                            <i
                                className="devicon-mongodb-plain colored"
                                style={{
                                display: 'inline-block'
                            }}></i>
                        </div>
                        <div className="col-lg-4 row text-center dev fromRight" ref="fromRight">
                            <h3>Tools</h3>
                            <i className="devicon-github-plain colored">
                                <img
                                    src={vscode}
                                    alt="vscode"
                                    style={{
                                    display: 'contents'
                                }}/>
                                <img src={intellij} alt="intellij"/>
                            </i>
                        </div>
                    </div>
                    <h3 style={{textAlign: 'center'}}>Some knowledge of: Laravel 5 & C</h3>
                </section>

            </div>
        );
    }
}

export default Skills;
