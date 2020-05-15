import React from 'react';
// CSS 

// External Libraries
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";

// Bootstrap Components
import Container from 'react-bootstrap/Container';

// My Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

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
                    <Route path="/" exact render={() => <Homepage title="Rey David Cuevas Vela" subtitle="Freelance Full Stack Web Developer" text="HTML/CSS | Ruby | Rails | JavaScript | React | Redux"/>} />
                    <Route path="/resume" exact render={() => <Resume />} />
                    <Route path="/contact" exact render={() => <Contact />} />
                </Container> 
                <Footer />
            </Router>
        );
    }

}

export default App;