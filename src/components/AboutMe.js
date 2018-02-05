import React, {Component} from 'react';
import me from '../assets/me.jpg';
import resume from '../assets/christianTrinidad_Resume2017.pdf';


export default class AboutMe extends Component {
  render() {
    return (
        <header id='aboutMe'>

          <nav className="page-header">
            <a className="page-scroll" href="#aboutsSection">About</a>
            <a className="page-scroll" href="#skills">Dev</a>
            <a className="page-scroll" href="#projects">Projects</a>
            <a href={resume} target="_blank" rel="noopener noreferrer">Résumé</a>
          </nav>

          <div className="container">
            <img className="img-circle me" alt="Christian Trinidad" src={me}/>
            <h1 className="myName">Hello World!</h1>
          </div>

          <h1 className="myName inner">I'm
            
            <span id="typed"> </span>
            <div className="hideContent myDesc"> [ Web Developer | Student ] </div>
          </h1>

          <a className="down page-scroll" href="#aboutsSection">
            <i className="fa fa-angle-double-down down"></i>
          </a>

        </header>
    );
  }
}


