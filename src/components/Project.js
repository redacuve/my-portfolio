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
                        {
                        props.item.technology.map((elem) => {
                            return <li key={elem}>{elem}</li>
                        })
                        }
                    </ul>
                </div>
                <div className="project-links d-flex justify-content-around">
                    <a href={props.item.live} className="btn btn-success" role="button">Live Version!</a>
                    <a href={props.item.source} className="btn btn-info" role="button">Source Code</a>
                </div>
            </div>
        </div>
    );
}

export default Project;