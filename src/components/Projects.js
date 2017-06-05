import React, {Component} from 'react';

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
                    <a href="x">
                        <div className="rectangle">
                            <p className="title">NoteRoom</p>
                            <p>A collaborative note taking experience.</p>
                        </div>
                        <div className="inner">
                            <span>Menu by Simon Jensen</span>
                        </div>
                    </a>
                </li>
                <li className="col-lg-6 col-md-2">
                    <a href="x">
                        <div className="rectangle">
                            <p className="title">TriniBot</p>
                            <p>My personal Twitter Bot</p>
                        </div>
                        <div className="inner">
                            <span>Menu by Simon Jensen</span>
                        </div>
                    </a>
                </li>
                <li className="col-lg-6 col-md-2">
                    <a href="x">
                        <div className="rectangle">
                            <p className="title">Website v1</p>
                            <p>My first personal website</p>
                        </div>
                        <div className="inner">
                            <span>Menu by Simon Jensen</span>
                        </div>
                    </a>
                </li>
                <li className="col-lg-6 col-md-2">
                    <a href="x">
                        <div className="rectangle">
                            <p className="title">Voitcha</p>
                            <p>Voice recognition captcha</p>
                        </div>
                        <div className="inner">
                            <span>Menu by Simon Jensen</span>
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
