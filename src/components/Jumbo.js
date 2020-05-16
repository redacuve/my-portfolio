import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Jumbo(props) {
    return(
        <Jumbotron>
            <Container>
                <h1 className="display-4">{props.title}</h1>
                {props.subtitle && <h4 className="display-5">{props.subtitle}</h4>}
                {props.text && <p className="lead">{props.text}</p>}
                {props.children}
            </Container>
        </Jumbotron>
    );
}

export default Jumbo;