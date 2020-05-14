import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Jumbo(props) {
    return(
        <Jumbotron fluid={true}>
            <Container>
                <h1 className="display-4">{props.title}</h1>
                <h4 className="display-5">{props.subtitle}</h4>
                <p className="lead">{props.text}</p>
            </Container>
        </Jumbotron>
    );
}

export default Jumbo;