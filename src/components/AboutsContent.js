import React, {Component} from 'react';
import xtian from '../img/xtian.png';
import sr from '../js/scrollreveal.js';
import {fromLt,fromRt} from '../js/directions.js';

class AboutsContent extends Component {
 componentDidMount = () => {
    sr.reveal(this.refs.fromLeft, fromLt);
    sr.reveal(this.refs.fromRight, fromRt);
 }
  render() {
    return (
      <div className="row aboutsMe">
                <div className="infoCol fromLeft" ref='fromLeft'>
                    <img className="img-circle" src={xtian} alt="me"/>

                    <div className="personalLinks">
                        <a href="https://github.com/novellito" target="_blank" alt="my github" rel="noopener noreferrer"><i className="fa fa-github-alt social-ink"
                        data-toggle="tooltip" data-placement="top" title = "View my GitHub"></i></a>
                        <a href="mailto:cntrinidad@gmail.com" alt="email me" rel="noopener noreferrer"><i className="fa fa-envelope-open" data-toggle="tooltip" data-placement="top" title = "Email Me"></i></a>
                        <a href="https://www.linkedin.com/in/christian-trinidad07/" alt="my linked in" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square social-ink" 
                        data-toggle="tooltip" data-placement="top" title = "View my LinkedIn" rel="noopener noreferrer"></i></a>
                    </div>
                </div>

                <div className="rt-col " ref='fromRight'>

                    <h3 className="fromRight" >About Me</h3>
                    <p className="fromRight" >I'm an undergraduate student studying computer science at California State University Northridge, specializing
                        in web engineering. I'm currently a web developer for my university's Career Center as well as a
                        technical support specialist for our Distance Learning Center. Outside the world of programming,
                        I enjoy working out, listening to music, and growing my sneaker collection.</p>
                    <a href="#x"><button className="resume fromRight" ref='fromRight'><i className="fa fa-download" ></i>   Download Résumé (PDF)</button></a>
                </div>
                 <div className="personalLinks mini">
                        <a href="https://github.com/novellito" rel="noopener noreferrer"><i className="fa fa-github-alt social-ink"
                        data-toggle="tooltip" data-placement="top" title = "View my GitHub"></i></a>
                        <a href="mailto:cntrinidad@gmail.com" ><i className="fa fa-envelope-open" data-toggle="tooltip" data-placement="top" title = "Email Me"></i></a>
                        <a href="https://www.linkedin.com/in/christian-trinidad07/" rel="noopener noreferrer"><i className="fa fa-linkedin-square social-ink" 
                        data-toggle="tooltip" data-placement="top" title = "View my LinkedIn"></i></a>
                    </div>
            </div>
    );
  }
}

export default AboutsContent;
