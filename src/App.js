import React from 'react';
// CSS 

// External Libraries
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// Bootstrap Components
import Container from 'react-bootstrap/Container';

// My Components
import NavBar from './components/NavBar';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <Router>
                <NavBar />
                <Container fluid={true}>
                
                </Container> 
            </Router>
        );
    }

}

export default App;