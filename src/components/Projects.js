import React, {Component} from 'react';
import noteroom from '../img/nr.png';
import TriniBot from '../img/bot.png';
import voitcha from '../img/voitcha.png'
import wv1 from '../img/webv1.JPG';

class Projects extends Component {
  render() {
    return (
      <div>

 <div className="wrapper">

    <section id="projects">
        <h1 className="projectTitle">Projects<i className="fa fa-code" aria-hidden="true"></i></h1>
        <div className="container">
            <ul id="da-thumbs" className="row da-thumbs">
                <li className="col-lg-6 col-md-2">
                    <a href="https://github.com/novellito/Note-Room" target="_blank" rel="noopener noreferrer">
                        <div className="rectangle">
                        <img src={noteroom} alt="noteroom"/>
                            <p className="title">NoteRoom</p>
                            <p>A collaborative note taking experience.</p>
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
                <li className="col-lg-6 col-md-2">
                    <a href="https://github.com/novellito/twitterBot" target="_blank" rel="noopener noreferrer">
                        <div className="rectangle">
                            <img src={TriniBot} alt="trinibot"/>                            
                            <p className="title">TriniBot</p>
                            <p>My personal Twitter Bot</p>
                        </div>
                        <div className="hovTitle">
                            <span>TriniBot</span>
                            <span className="projDesc">
                                TriniBot was initially created to learn the basics of Node.js. 
                                I have 3 iterations of the project in which the complexity gradually increases. The first is a basic command line interface,
                                the second has a GUI (made with handlebars), and the third has been deployed to Heroku.
                            </span>
                            <span className="tech">
                                Technology used: Node.js, Twitter API, Handlebars, Express.js
                            </span>        
                        </div>
                    </a>
                </li>
                <li className="col-lg-6 col-md-2">
                    <a href="x">
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
                <li className="col-lg-6 col-md-2">
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
      </div>
    );
  }
}


export default Projects;
