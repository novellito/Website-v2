import React from 'react';
import './Projects.scss';
import csuncs from '../../assets/csuncs.png';
import scrambleDash from '../../assets/scramDash.png';
import noteroom from '../../assets/nr.png';
import twitterBot from '../../assets/bot.png';
import voitcha from '../../assets/voitcha.png';
import rtc from '../../assets/rtc.png';
import dl from '../../assets/dlTools.png'
import web from '../../assets/website.png'
import todo from '../../assets/todo.jpg';
import Project from './Project/Project';
import desc from './Descriptions'
import WOW from 'wowjs';

const projects = (props) => {
    
    new WOW.WOW({live: false}).init();
    
    return (
        <div id="projects">
        <h1 className="projectTitle">Projects <i className="fa fa-code" aria-hidden="true"></i></h1>
            <div className="container wow rollIn">
                <div className="row-cont">
                    <Project
                        description={desc[0]}
                        techProp={['MongoDb', 'Express.js', 'Angular', 'Node.js']}
                        projectName="CSUN-CS Planner"
                        projLink="https://github.com/novellito/CSUN-MEAN-App"
                        style={{backgroundColor: '#D00D2D'}}
                        imgSrc={csuncs}></Project>
                    <Project
                        description={desc[1]}                    
                        techProp={['MySQL', 'Express.js', 'React.js', 'Node.js']}
                        projectName="Scramble Dash"
                        projLink="https://github.com/novellito/scramble-dash"
                        imgSrc={scrambleDash}
                        style={{backgroundColor:'#36479e'}}
                        ></Project>
                    <Project
                        description={desc[7]}
                        techProp={['MongoDb', 'Express.js', 'Angular', 'Node.js']}
                        projectName="Real Time Captioning"
                        projLink="https://github.com/CSUN-Comp490/RealTimeCaptioning"
                        style={{backgroundColor:'#262626'}}
                        imgSrc={rtc}></Project>
                    <Project
                        description={desc[2]}                  
                        techProp={['Laravel 5', 'Node.js', 'Socket.io', 'MySQL']}
                        projectName="NoteRoom"
                        projLink="https://github.com/novellito/NoteRoom"
                        style={{backgroundColor:'#00a0ff'}}
                        imgSrc={noteroom}></Project>

                    <Project
                        description={desc[8]}                    
                        techProp={['MongoDb', 'Express.js', 'React.js','Node.js', ]}
                        projectName="Todo App"
                        projLink="https://github.com/novellito/Web-Engineering"
                        style={{backgroundColor:'white'}}
                        imgSrc={todo}></Project>
                    <Project
                        description={desc[3]}                    
                        techProp={['Node.js', 'Twitter API', 'Handlebars']}
                        projectName="TriniBot"
                        projLink="https://github.com/novellito/TriniBot"
                        style={{backgroundColor:'rgba(251,168,15,.65)'}}
                        imgSrc={twitterBot}></Project>
                    <Project
                        description={desc[5]}  
                        techProp={['Java', 'Google API']}
                        projectName="Voitcha"
                        projLink="https://github.com/novellito/CSUN-Accessibility-Competition-Project"
                        style={{backgroundColor:'#b94848'}}
                        imgSrc={voitcha}></Project>
                    <Project
                        description={desc[6]}                                        
                        techProp={['Electron', 'Selenium', 'Chrome Extension']}
                        projectName="Distance Learning Tools"
                        projLink="https://github.com/novellito/Tseng-Utilities"
                        style={{backgroundColor:'#607d8b  '}}
                        imgSrc={dl}></Project>
                    <Project
                        description={desc[4]}                    
                        techProp={['HTML', 'CSS', 'JQuery', 'Bootstrap']}
                        projectName="Website v1"
                        projLink="http://novellito.github.io"
                        style={{backgroundColor:'#76AFFF '}}
                        imgSrc={web}></Project>
                </div>
            </div>

        </div>
    );
}

export default projects;