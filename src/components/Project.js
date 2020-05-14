import React from 'react';

function Project(props){
    return(
        <div className="project-container">
            <div className="project-image-container">
                <img src="" alt="image-alt" />
            </div>
            <div className="project-content">
                <h3>{props.item.title}</h3>
                <p className="project-text">
                    {props.item.text}
                </p>
                <div className="project-technologies">
                    <ul>
                        <li>Technologie 1</li>
                        <li>Technologie 2</li>
                    </ul>
                </div>
                <div className="project-links">
                    <button>Live Version!</button>
                    <button>Source Code</button>
                </div>
            </div>
        </div>
    );
}

export default Project;