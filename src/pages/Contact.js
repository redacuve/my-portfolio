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
            emailSent: null,
            contact: [
                {ref: 'https://twitter.com/redacuve', icon: faTwitter, text: '@redacuve'},
                {ref: 'https://github.com/redacuve', icon: faGithub, text: 'redacuve'},
                {ref: 'https://www.linkedin.com/in/redacuve/', icon: faLinkedin, text: 'redacuve'},
                {ref: 'https://wa.me/522281855336', icon: faWhatsapp, text: '+52 (228) 185-5336'},
                {ref: 'mailto:redacuve@gmail.com', icon: faEnvelope, text: 'redacuve@gmail.com'},
            ],
            random: 1,
            quotes: [
                {quot: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', autor: 'Martin Fowler'},
                {quot: 'First, solve the problem. Then, write the code.', autor: 'John Johnson'},
                {quot: 'Experience is the name everyone gives to their mistakes.', autor: 'Oscar Wilde'},
                {quot: 'In order to be irreplaceable, one must always be different', autor: 'Coco Chanel'},
                {quot: 'Java is to JavaScript what car is to Carpet.', autor: 'Chris Heilmann'},
                {quot: 'Knowledge is power.', autor: 'Francis Bacon'},
                {quot: 'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.', autor: 'Dan Salomon'},
                {quot: 'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.', autor: 'Antoine de Saint-Exupery<'},
                {quot: 'Code is like humor. When you have to explain it, it’s bad.', autor: 'Cory House'},
                {quot: 'Fix the cause, not the symptom.', autor: 'Steve Maguire'},
                {quot: 'Optimism is an occupational hazard of programming: feedback is the treatment.', author: 'Kent Beck' },
                {quot: 'When to use iterative development? You should use iterative development only on projects that you want to succeed.', autor: 'Martin Fowler'},
                {quot: 'Simplicity is the soul of efficiency.', autor: 'Austin Freeman'},
                {quot: 'Before software can be reusable it first has to be usable.', autor: 'Ralph Johnson'},
                {quot: 'Make it work, make it right, make it fast.', autor: 'Kent Beck'},
            ]
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        this.setState({random :  Math.floor(Math.random()*14)});
    }
    
    render(){
        return(
            <Container fluid={true}>
                <Jumbo title="Contact Me!">
                    <div className="d-flex flex-wrap justify-content-between">
                        {
                        this.state.contact.map(elem => {
                            return(<a key={elem.ref} className="d-flex align-items-center c-indigo flex-wrap" href={elem.ref} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="display-4" icon={elem.icon} /><span className="pl-2 h5">{elem.text}</span></a>)
                        })
                        }
                    </div>    
                </Jumbo>

                <div class="row">
                    <div className="col-12 col-lg-8">
                        <h3 className="br-indigo">Send me a Mail:</h3>
                            <Form>
                                <Form.Group>
                                    <Form.Label htmlFor="full-name">Full Name:</Form.Label>
                                    <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="email">Email:</Form.Label>
                                    <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="message">Message:</Form.Label>
                                    <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Button className="d-inline-block b-indigo pl-3 pr-3" type="submit" disabled={this.state.disabled} >Send</Button>
                                </Form.Group>
    
                                { this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                                { this.state.emailSent === false && <p className="d-inline err-msg">Error Try Again Later</p>}
                            </Form>
                        </div>
                        <div className="d-none d-lg-block col-lg-4 b-indigo text-light rounded">
                            <div className="h-100 d-flex align-items-center">
                                {this.state.quotes[this.state.random] && <p className="lead"><q>{this.state.quotes[this.state.random].quot}</q> – <em>{this.state.quotes[this.state.random].autor}</em></p>}
                            </div>
                        </div>
                </div>
            </Container>
        );
    }
}

export default Contact;