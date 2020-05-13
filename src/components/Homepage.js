import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbo from './Jumbo';

function Homepage(props) {
    return(
        <Container fluid={true}>
            <Jumbo title={props.title} subtitle={props.subtitle} text={props.text} />  
        </Container>
    );
}

export default Homepage;