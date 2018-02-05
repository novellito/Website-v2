import React, {Component} from 'react';
import noteroom from '../assets/nr.png';
import TriniBot from '../assets/bot.png';
import voitcha from '../assets/voitcha.png'
import wv1 from '../assets/webv1.JPG';
import scramble from '../assets/scramDash.png';
import csun from '../assets/csuncs.jpg';

class Projects extends Component {
  render() {
    return (
      <div>


    <section id="projects">
        <h1 className="projectTitle">Projects <i className="fa fa-code" aria-hidden="true"></i></h1>
         <div className="container"> 
            <ul id="da-thumbs" className="row da-thumbs">
                <li className="col-lg-4 col-md-6">
                    <a href="https://github.com/novellito/myCsun-mean-app" target="_blank" rel="noopener noreferrer">
                        <div className="rectangle">
                        <img src={csun} alt="cs-planner"/>
                            <p className="title">CSUN-CS Planner</p>
                            <p>Plan your classes</p>
                        </div>
                        <div className="hovTitle">
                            <span>CSUN-CS Planner</span>
                            <span className="projDesc">  
                                This app encompasses what I have learned over the last several months. It's goal is to allow CS majors at my university to create and plan their future class schedules.
                            </span>
                            <span className="tech">
                                Technology used: MEAN Stack (MongoDB, Express.js, Angular 4, Node.js)
                                </span>      
                        </div>
                    </a>
                </li>
                <li className="col-lg-4 col-md-6">
                    <a href="https://github.com/novellito/scramble-dash" target="_blank" rel="noopener noreferrer">
                        <div className="rectangle">
                        <img src={scramble} alt="scrambleDash"/>
                            <p className="title">Scramble - Dash</p>
                            <p>A simple word game</p>
                        </div>
                        <div className="hovTitle">
                            <span>Scramble - Dash</span>
                            <span className="projDesc">  
                                Scramble-Dash was created to allow me to get more familiarized with some of the features in React.js. It also incorporates a backend where user highscores can be posted and retrieved.
                            </span>
                            <span className="tech">
                                Technology used: MERN Stack (MySQL, Express.js, React.js, Node.js), Mocha
                                </span>      
                        </div>
                    </a>
                </li>
                <li className="col-lg-4 col-md-6">
                    <a href="https://github.com/novellito/Note-Room" target="_blank" rel="noopener noreferrer">
                        <div className="rectangle">
                        <img src={noteroom} alt="noteroom"/>
                            <p className="title">NoteRoom</p>
                            <p>Collaborative note taking</p>
                        </div>
                        <div className="hovTitle">
                            <span>NoteRoom</span>
                            <span className="projDesc">  
                                NoteRoom was created to assist students in taking notes in class. The app allowed for better organization of notes while also allowing students to take notes simultaneously with their peers.
                            </span>
                            <span className="tech">
                                Technology used: PHP & Laravel Framework, MySQL, Node.js, Socket.io, HTML/CSS, Bootstrap.
                                </span>      
                        </div>
                    </a>
                </li>
                <li className="col-lg-4 col-md-6">
                    <a href="https://github.com/novellito/twitterBot" target="_blank" rel="noopener noreferrer">
                        <div className="rectangle">
                            <img src={TriniBot} alt="trinibot"/>                            
                            <p className="title">TriniBot</p>
                            <p>My personal Twitter bot</p>
                        </div>
                        <div className="hovTitle">
                            <span>TriniBot</span>
                            <span className="projDesc">
                                TriniBot was initially created to learn the basics of Node.js. 
                                I have 3 iterations of the project in which the complexity gradually increases. The first is a basic command line interface,
                                the second has a GUI (made with handlebars), and the third was deployed to Heroku.
                            </span>
                            <span className="tech">
                                Technology used: Node.js, Twitter API, Handlebars, Express.js
                            </span>        
                        </div>
                    </a>
                </li>
                <li className="col-lg-4 col-md-6">
                    <a href="https://novellito.github.io" target="_blank" rel="noopener noreferrer">
                        <div className="rectangle">
                            <img src={wv1} alt="webv1"/>                                                        
                            <p className="title">Website v1</p>
                            <p>My first personal website</p>
                        </div>
                        <div className="hovTitle">
                            <span>Website v1</span>
                            <span className="projDesc">
                                This was the first website that I built to showcase my portfolio. It was created primarily with HTML, CSS,
                                Bootstrap, Javascript, and JQuery.
                            </span>   
                        </div>
                    </a>
                </li>
                <li className="col-lg-4 col-md-6">
                    <a href="https://github.com/novellito/CSUN-Accessibility-Competition-Project" target="_blank" rel="noopener noreferrer">
                        <div className="rectangle">
                            <img src={voitcha} alt="voitcha"/>                                                        
                            <p className="title">Voitcha</p>
                            <p>Voice recognition captcha</p>
                        </div>
                        <div className="hovTitle">
                            <span>Voitcha</span>
                            <span className="projDesc"> 
                                Voitcha is an android application that was created in the span of 3 days for our schools programming competition, 
                                where we took 2nd place. 
                            </span>
                            <span className="tech">
                                Technology used: Java, Google API
                            </span>      
                        </div>
                    </a>
                </li>
            </ul>
         </div> 
    </section>
      
      </div>
    );
  }
}


export default Projects;
