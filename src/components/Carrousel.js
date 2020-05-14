import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Project from './Project';

class Carrousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            default: 'htmlCss',
            htmlCss:  [
                {
                    id: 0,
                    title: 'Newsweek Clone Page',
                    text: 'The cookbook for Developers',
                    imgSrc: 'cuenco',
                    live: 'http://www.livepage.com',
                    source: 'http://www.githubsource.com',
                    technology: ['javascript', 'html', 'css', 'react']
                },
                {
                    id: 1,
                    title: 'The odin Project Homepage',
                    text: 'The cookbook for Developers',
                    imgSrc: 'cuenco',
                    live: 'http://www.livepage.com',
                    source: 'http://www.githubsource.com',
                    technology: ['javascript', 'html', 'css', 'react']
                },
                {
                    id: 2,
                    title: 'Federico Faggin Tribute Page',
                    text: 'The cookbook for Developers',
                    imgSrc: 'cuenco',
                    live: 'http://www.livepage.com',
                    source: 'http://www.githubsource.com',
                    technology: ['javascript', 'html', 'css', 'react']
                },
                {
                    id: 3,
                    title: 'The next web homepage',
                    text: 'The cookbook for Developers',
                    imgSrc: 'cuenco',
                    live: 'http://www.livepage.com',
                    source: 'http://www.githubsource.com',
                    technology: ['javascript', 'html', 'css', 'react']
                },
                {
                    id: 4,
                    title: 'The next web homepage',
                    text: 'The cookbook for Developers',
                    imgSrc: 'cuenco',
                    live: 'http://www.livepage.com',
                    source: 'http://www.githubsource.com',
                    technology: ['javascript', 'html', 'css', 'react']
                }
            ],
            rubyRails: [
                {
                    id: 0,
                    title: 'Tic Tac Toe Game',
                    text: 'The cookbook for Developers',
                    imgSrc: 'cuenco',
                    live: 'http://www.livepage.com',
                    source: 'http://www.githubsource.com',
                    technology: ['javascript', 'html', 'css', 'react']
                },
                {
                    id: 1,
                    title: 'MXN-USD Web Scrapper',
                    text: 'The cookbook for Developers',
                    imgSrc: 'cuenco',
                    live: 'http://www.livepage.com',
                    source: 'http://www.githubsource.com',
                    technology: ['javascript', 'html', 'css', 'react']
                },
                {
                    id: 2,
                    title: 'Soduko Solver',
                    text: 'The cookbook for Developers',
                    imgSrc: 'cuenco',
                    live: 'http://www.livepage.com',
                    source: 'http://www.githubsource.com',
                    technology: ['javascript', 'html', 'css', 'react']
                },
                {
                    id: 3,
                    title: 'Lakastapp!',
                    text: 'The cookbook for Developers',
                    imgSrc: 'cuenco',
                    live: 'http://www.livepage.com',
                    source: 'http://www.githubsource.com',
                    technology: ['javascript', 'html', 'css', 'react']
                }
            ],
            javascriptReact: [
                {
                    id: 0,
                    title: 'My Portfolio',
                    text: 'The cookbook for Developers',
                    imgSrc: 'cuenco',
                    live: 'http://www.livepage.com',
                    source: 'http://devgroup.com',
                    technology: ['javascript', 'html', 'css', 'react']
                }
            ]
        }
    }

    myProjects(items){
        return items.map((item) => {
            return <Project item={item} key={item.id} />
        });
    }

    changeDefault(id) {
        switch (id) {
            case 1:
                this.setState({default: 'htmlCss'});
                break;
            case 2:
                this.setState({default: 'rubyRails'});
                break;
            case 3:
                this.setState({default: 'javascriptReact'});
                break;
        }
    }

    render(){
        return(
            <Container fluid={true} >
                    <Nav className="border-bottom justify-content-center">
                        <a className="nav-link text-dark" onClick={()=> this.changeDefault(1)}>HTML / CSS</a>
                        <a className="nav-link text-dark" onClick={()=> this.changeDefault(2)}>Ruby / Rails</a>
                        <a className="nav-link text-dark" onClick={()=> this.changeDefault(3)}>Javascript / React</a>
                    </Nav>
                    <div className="projects-container d-flex justify-content-around flex-wrap">
                        {this.myProjects(this.state[this.state.default])}
                    </div>
            </Container>
        );
    }
}

export default Carrousel;