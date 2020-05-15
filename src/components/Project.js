import React from 'react';

function Project(props){
    
    return(
        <div className="project-container p-1">
            <div className="project-image-container">
                <img src={props.item.imgSrc} alt="image-alt" />
            </div>
            <div className="project-content">
                <h3 className="mt-1 mb-2">{props.item.title}</h3>
                <p className="project-text">
                    {props.item.text}
                </p>
                <div className="project-technologies">
                    {
                        props.item.technology.map((elem) => {
                            return <span className="" key={elem}>{elem}</span>
                        })
                    }
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