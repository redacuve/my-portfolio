import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbo from './Jumbo';
function Resume() {
    return(
        <Container fluid={true}>
            <Jumbo title="My Resume" />
        </Container>
    );
}

export default Resume;