import React from "react";
import me from "../../assets/me.jpg";
import "./Landing.scss";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

 const Landing = (props) => {

    return (
      <header id="aboutMe">
        <div className="container">
          <img className="me rounded-circle" alt="Christian Trinidad" src={me}/>
          <div className="h1 myName">
            Hello World!
            <Typist>
              <span>I'm a web developer</span>
              <Typist.Backspace count={15} delay={200}/>
              <span>Christian Trinidad</span>
            </Typist>
          </div>
          <div id="myDesc">
            [ Web Developer ]
          </div>
          <a className="down page-scroll" href="#aboutsSection">
            <i className="fa fa-angle-double-down down"/>
          </a>
        </div>
      </header>
    );
}

export default Landing;
