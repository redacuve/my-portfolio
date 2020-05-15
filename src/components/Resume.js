import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbo from './Jumbo';
function Resume() {
    return(
        <Container fluid={true}>
            <Jumbo title="My Resume:" subtitle="Rey David Cuevas Vela" text="Full Stack Web Developer" />
            <div className="row">
                <div className="col-4">
                    <div>
                    <p>
                        Hello, I’m David I’m a full-stack software engineer. I have a computer science degree, I worked on IT in a company in Mexico, but now I’m looking for a remote job that will put my skills as a software engineer to work.
                    </p>
                    <h3>Location</h3>
                    <p>
                        Xalapa, Veracruz, Mexico (Able to relocate).
                    </p>
                    <h3>Phone</h3>
                    <p>
                        +52 (271) 173-0101
                    </p>
                    </div>
                </div>
                <div className="col-8">
                    <h2>Software Skills Sets:</h2>
                    <p>
                    Languajes:
                    JavaScript, Ruby, PHP, HTML, CSS/SASS, C#, Java, C++.

                    Frameworks /Libraries:
                    Ruby on Rails, Django, React, Redux, Angular, jQuery, Bootstrap, Node Js.
                    Databases:
                    SQLite3, Mysql, Postgresql.
                    Others:
                    Git, GitHub, Amazon S3, IBM Cloud, Heroku, Remote Work, Pair Programming,
                    Testing:
                    RSpec, Minitest, Capynara.
                    </p>
                    <h2>Soft Skills:</h2>
                    <p>
                        Integrity.
                        Professionalism.
                        Positive Attitude.
                        Teamwork.
                        Work ethic.
                        Critical Thinking.
                        Mentoring.
                    </p>
                    <h2>Education:</h2>
                    <p></p>
                    <h2>Professional Experience:</h2>
                    <p></p>
                    <h2>Languajes:</h2>
                    <p>
                        English
                        Spanish
                    </p>
                    <h2>Interest:</h2>
                    <p>
                    Chess
                    Reading
                    Music
                    Sports
                    Travel
                    Cooking
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default Resume;