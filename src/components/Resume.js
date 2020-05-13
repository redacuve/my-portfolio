import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbo from './Jumbo';
function Resume() {
    return(
        <Container fluid={true}>
            <Jumbo title="My Resume:" subtitle="Rey David Cuevas Vela" text="Full Stack Web Developer" />
        </Container>
    );
}

export default Resume;