import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Project from './Project';

// Images
import faggin from '../assets/images/faggin.png';
import newsweek from '../assets/images/newsweek.png';
import odinproject from '../assets/images/odinproject.png';
import thenextweb from '../assets/images/thenextweb.png';
import smashingheatmap from '../assets/images/smashingheatmap.png';


class Carrousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            default: 'htmlCss',
            htmlCss:  [
                {
                    id: 0,
                    title: 'Newsweek Clone Page',
                    text: 'In this project, I copied the style and layout of the Newsweek site, also I use google fonts because in the Newsweek site they use Roboto, Arial, Helvetica. Finally, I use Boostrap for learning purposes.',
                    imgSrc: newsweek,
                    live: 'http://www.livepage.com',
                    source: 'http://www.githubsource.com',
                    technology: ['HTML', 'CSS', 'Bootstrap']
                },
                {
                    id: 1,
                    title: 'The odin Project Homepage',
                    text: 'In this project I imitate the layout of The Odin Project web page, It is built with my very own CSS framework (inspired by Twitter Bootstrap).',
                    imgSrc: odinproject,
                    live: 'http://www.livepage.com',
                    source: 'https://github.com/redacuve/CloneOdinProject/tree/master',
                    technology: ['HTML', 'CSS', 'My own framework']
                },
                {
                    id: 2,
                    title: 'Federico Faggin Tribute Page',
                    text: 'This is Tribute page of Federico Faggin, Faggin is the designer of the Intel 4040 Processor.',
                    imgSrc: faggin,
                    live: 'http://www.livepage.com',
                    source: 'https://codepen.io/redacuve/pen/vYEKbLj',
                    technology: ['HTML', 'CSS']
                },
                {
                    id: 3,
                    title: 'The Next Web Homepage',
                    text: 'This a imitation of the  layout of the News page https://thenextweb.com/. The structure of the page is build using Flexbox, Grids, Floats and it have semantic HTML tags.',
                    imgSrc: thenextweb,
                    live: 'http://www.livepage.com',
                    source: 'https://github.com/redacuve/Responsive-Design',
                    technology: ['HTML', 'CSS']
                },
                {
                    id: 4,
                    title: 'Smashing Magazine Heatmap',
                    text: 'This is a grayscale heat map of the website Smashing Magazine in this project every element have more gray if the elemten is greatest weight in the visual hierachy.',
                    imgSrc: smashingheatmap,
                    live: 'http://www.livepage.com',
                    source: 'https://github.com/fdezcaminero/SmashingUX/tree/Front-Page',
                    technology: ['HTML', 'CSS']
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