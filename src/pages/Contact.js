import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbo from '../components/Jumbo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }
    
    render(){
        return(
            <Container fluid={true}>
                <Jumbo title="Contact Me!">
                    <div className="d-flex flex-wrap justify-content-between">
                        <a className="d-flex align-items-center" href="https://twitter.com/redacuve" target="_blank"><FontAwesomeIcon className="display-4" icon={faTwitter} /><span className="pl-2 h4">@redacuve</span></a>  
                        <a className="d-flex align-items-center" href="https://github.com/redacuve" target="_blank"><FontAwesomeIcon className="display-4" icon={faGithub} /><span className="pl-2 h4">redacuve</span></a>  
                        <a className="d-flex align-items-center" href="https://www.linkedin.com/in/redacuve/" target="_blank"><FontAwesomeIcon className="display-4" icon={faLinkedin} /><span className="pl-2 h4">redacuve</span></a>  
                        <a className="d-flex align-items-center" href="https://wa.me/522281855336" target="_blank"><FontAwesomeIcon className="display-4" icon={faWhatsapp} /><span className="pl-2 h4">+52 (228) 185-5336</span></a>  
                        <a className="d-flex align-items-center" href="mailto:redacuve@gmail.com" target="_blank"><FontAwesomeIcon className="display-4" icon={faEnvelope} /><span className="pl-2 h4">redacuve@gmail.com</span></a>  
                    </div>    
                </Jumbo>

                <div>
                    <h3>Send me a Mail:</h3>
                        <Form>
                            <Form.Group>
                                <Form.Label htmlFor="full-name">Full Name:</Form.Label>
                                <Form.Control id="full-name" name="name" type="text" value={this.state.name} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="email">Email:</Form.Label>
                                <Form.Control id="email" name="email" type="email" value={this.state.email} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="message">Message:</Form.Label>
                                <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} />
                            </Form.Group>
                            <Form.Group>
                                <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled} >Send</Button>
                            </Form.Group>

                            { this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                            { this.state.emailSent === false && <p className="d-inline err-msg">Error Try Again Later</p>}
                        </Form>
                    </div>

            </Container>
        );
    }
}

export default Contact;