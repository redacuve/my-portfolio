import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbo from '../components/Jumbo';
import Carrousel from '../components/Carrousel';

function Homepage(props) {
    return (
        <Container fluid={true}>
            <Jumbo title={props.title} subtitle={props.subtitle} text={props.text} />
            <div className="bg-dark text-light">
                <h3 className="p-2">My Projects:</h3>
            </div>
            <Carrousel />
        </Container>
    );
}

export default Homepage;