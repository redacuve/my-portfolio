import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbo from '../components/Jumbo';
import SetList from '../components/SetList';
import MultSetList from '../components/MultiSetList';
import DateSet from '../components/DateSet.js';

function Resume() {
    return(
        <Container fluid={true}>
            <Jumbo title="My Resume:" subtitle="Rey David Cuevas Vela" text="Full Stack Web Developer" />
            <div className="row">
                <div className="col-12 col-lg-4">
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
                        +52 (228) 185-5336
                    </p>
                    </div>
                </div>
                <div className="col-12 col-lg-8">
                    <MultSetList 
                        title="Software Skills Sets:"
                        multiset={
                            [
                                {subtitle: 'Languajes:', list: ['JavaScript', 'Ruby', 'PHP', 'HTML', 'CSS/SASS', 'C#', 'Java', 'C++']},
                                {subtitle: 'Frameworks/Libraries:', list: ['Ruby on Rails', 'Django', 'React', 'Redux', 'jQuery', 'Bootstrap', 'Node Js']},
                                {subtitle: 'Databases:', list: ['SQLite3', 'Mysql', 'Postgresql']},
                                {subtitle: 'Others:', list: ['Git', 'GitHub', 'Amazon S3', 'IBM Cloud', 'Heroku', 'Remote Work', 'Pair Programming']},
                                {subtitle: 'Testing:', list: ['RSpec', 'Minitest', 'Capybara']}
                            ]}
                    />
                    <SetList 
                        title="Soft Skills:" 
                        list={['Integrity.', 'Professionalism.', 'Positive Attitude.', 'Teamwork.', 'Work ethic.', 'Critical Thinking.', 'Mentoring.']} 
                        listflex={false}
                    />
                    <DateSet 
                        title="Education:"
                        list={[
                            {dates: '2019 – 2020', description: 'Microverse, Full Stack Web Developer Diploma.'},
                            {dates: '2010 – 2015', description: 'Universidad Veracruzana, Degree on Computer Science.'}
                        ]}
                    />
                    <DateSet 
                        title="Professional Experience:"
                        list={[
                            {dates: '2010 – 2020', description: 'Freelance Hardware and Software Seller.'},
                            {dates: '2015 – 2020', description: 'Freelance Developer and IT Specialist'},
                            {dates: '2015 – 2019', description: 'CDE PANVER, Director of IT Deparment.', duties: ['Creating software when it\'s time for elections.', 'Providing help desk across the company.', 'Installing and configuring computer hardware, software, systems, networks, telephony, printers, and scanners.', 'Maintaining computer systems and networks.', 'Repairing computers and printers.', 'Training junior staff members.'] },
                            {dates: '2014 – 2017', description: 'elclarin.com.mx, Designer, programmer and webmaster.', duties: ['Desing and program the website.', 'Mantaining the website.']},
                        ]}
                    />
                    <SetList 
                        title="Languajes:"
                        list={['English', 'Spanish']}
                        listflex={true}
                    />
                    <SetList 
                        title="Interest:" 
                        list={['Chess', 'Reading', 'Music', 'Sports', 'Travel', 'Cooking']}
                        listflex={true}
                    />
                </div>
            </div>
        </Container>
    );
}

export default Resume;