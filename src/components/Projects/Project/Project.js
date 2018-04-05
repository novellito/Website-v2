import React from 'react';
import './Project.scss';

const project = (props) => {

    return (
        <div className="project">
            <div className="terminal">
                <div className="term-btn"></div>
                <div className="term-btn minimize"></div>
                <div className="term-btn zoom"></div>
            </div>
            <div className="card">
                <div style={props.style} className="thumbnail view overlay">
                    <img src={props.imgSrc} alt={props.projectName}/>
                    <div className="mask rgba-black-strong">
                    <a  href={props.projLink}
                        target="_blank"
                        alt={"github link to " + props.projectName}
                        rel="noopener noreferrer" className="desc-container">
                        {props.description}
                    </a>
                    </div>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{props.projectName}</h4>
                    {props
                        .techProp
                        .map((tech, id) => {
                            return <span key={id} className="badge badge-pill">{tech}</span>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default project;