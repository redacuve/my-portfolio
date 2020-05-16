import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

function Project(props){
    
    return(
        <div className="project-container p-1 mb-4">
            <div className="project-image-container">
                <img src={props.item.imgSrc} alt={'project ' + props.item.title + ' image'} />
            </div>
            <div className="project-content">
                <h3 className="mt-1 mb-2">{props.item.title}</h3>
                <p className="project-text text-justify">
                    {props.item.text}
                </p>
                <div className="project-technologies">
                    {
                        props.item.technology.map((elem) => {
                            return <span className="c-indigo" key={elem}>{elem}</span>
                        })
                    }
                </div>
                <div className="project-links d-flex justify-content-between">
                    {props.item.live && <a href={props.item.live} className="btn btn-success" role="button" target="_blank" rel="noopener noreferrer">Live Version!&nbsp;&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a>}
                    <a href={props.item.source} className="btn btn-info" role="button" target="_blank" rel="noopener noreferrer">Source Code&nbsp;&nbsp;<FontAwesomeIcon icon={faFileCode} /></a>
                </div>
            </div>
        </div>
    );
}

export default Project;