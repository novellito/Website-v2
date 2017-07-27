import React, {Component} from 'react';
import sr from '../js/scrollreveal.js';
import {fromBot, fromTop} from '../js/directions.js';

class Experience extends Component {

    componentDidMount = () => {
        sr.reveal(this.refs.fromTop, fromTop);
        sr.reveal(this.refs.fromBot, fromBot);
        sr.reveal(this.refs.fromtp, fromTop);
        sr.reveal(this.refs.frombt, fromBot);
    }
    render() {
        return (
            <div>

                <section id="experience">

                    <div className="container">

                        <div className="row aboutsMe fromTop" ref="fromTop">

                            <div className="infoCol">
                                <h1>
                                    <span>Education</span>
                                </h1>
                            </div>

                            <div className="rt-col md">

                                <h3>California State University Northridge</h3>
                                <p className="col-desc">BS in Computer Science <span> • </span>
                                    May 2018<span> • </span>
                                    Deans List Fall 2014-2017 
                                    <span> • </span>                                    
                                    Current GPA: 3.52
                                    </p>
                            </div>
                        </div>

                        <div
                            className="row aboutsMe"
                            style={{
                            margin: '0 auto',
                            width: '90%',
                            maxWidth: '1020px'
                        }}>

                            <div className="infoCol fromTop" ref="fromtp">
                                <h1>
                                    <span>Work</span>
                                </h1>
                            </div>

                            <div className="rt-col fromBot" ref="fromBot">
                                <h3>CSUN Career Center</h3>
                                <p className="col-desc">Web Developer<span> • </span>April 2017 - July 2017</p>
                                <p>I created content for my university's career center using various web
                                    technologies and also assisted our graphic designers in planning
                                    layouts for our websites.
                                </p>
                            </div>

                            <div
                                className="infoCol"
                                style={{
                                visibility: 'hidden'
                            }}>
                                <h1>
                                    <span>Work</span>
                                </h1>
                            </div>

                            <div className="rt-col fromBot" ref="frombt">
                                <h3>CSUN Distance Learning Center
                                </h3>
                                <p className="col-desc">Web Developer & Technical Support Specialist
                                    <span> • </span>
                                    April 2017 - Current</p>
                                <p>I facilitate one on one training sessions with professors regarding school
                                    software, provide Quality Assurance checks of course material, and upload
                                    materials provided by the professors to our learning management systems and
                                    YouTube.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default Experience;
