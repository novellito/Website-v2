import React from 'react';
import './Experience.scss';
import WOW from 'wowjs';
const experience = (props) => {

    new WOW.WOW({live: false}).init();
    
    return (
            <div id="experience" className="container">
                <div className="exp-container">
                    <h1 className="education wow fadeInDown">Education</h1>
                    <div className="university wow fadeInDown">
                        <p className="info-title wow fadeInDown">
                            California State University Northridge
                        </p>
                        <p className="info-desc">BS in Computer Science • May 2018 • Deans List Fall 2014 - Spring 2018 • Current GPA:
                            3.56 (Cum Laude)</p>
                    </div>
                    <h1 className="work wow fadeInDown">Work</h1>
                    <div className="w1 wow fadeInUp">
                        <p className="info-title">
                            CSUN Career Center
                        </p>
                        <p className="info-desc">
                            Web Developer • April 2017 - July 2017
                        </p>
                        <p>
                            I created content for my university's career center using various web
                            technologies and also assisted our graphic designers in planning layouts for our
                            websites.
                        </p>
                    </div>
                    <div className="w2 wow fadeInUp">
                        <p className="info-title">
                            CSUN Distance Learning Center
                        </p>
                        <p className="info-desc">
                            Web Developer & Tech Support Specialist • April 2017 - Current
                        </p>
                        <p>
                            I facilitate one on one training sessions with professors regarding school
                            software, provide Quality Assurance checks of course material, and upload
                            materials provided by the professors to our learning management systems and
                            YouTube.
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default experience;
