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
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Resume from './components/Resume';
import Contact from './components/Contact';

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
                    <Route path="/" exact render={() => <Homepage />} />
                    <Route path="/resume" exact render={() => <Resume />} />
                    <Route path="/contact" exact render={() => <Contact />} />
                </Container> 
                <Footer />
            </Router>
        );
    }

}

export default App;