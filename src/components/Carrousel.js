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
import juegogato from '../assets/images/juegogato.png';
import webscrapper from '../assets/images/webscrapper.png';
import soduko from '../assets/images/soduko.png';
import lakastapp from '../assets/images/lakastapp.png';
import my-portfolio from '../assets/images/my-portfolio.png';


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
                    live: 'https://rawcdn.githack.com/redacuve/NewsWeek/62c854242df610cac54aa26c727870f126b5014c/index.html',
                    source: 'https://github.com/redacuve/NewsWeek',
                    technology: ['HTML', 'CSS', 'Bootstrap']
                },
                {
                    id: 1,
                    title: 'The odin Project Homepage',
                    text: 'In this project I imitate the layout of The Odin Project web page, It is built with my very own CSS framework (inspired by Twitter Bootstrap).',
                    imgSrc: odinproject,
                    live: 'https://rawcdn.githack.com/redacuve/CloneOdinProject/02224a1fa4ed0a9727b0691b8aef3d2efcd8c73e/index.html',
                    source: 'https://github.com/redacuve/CloneOdinProject/tree/master',
                    technology: ['HTML', 'CSS', 'My own framework']
                },
                {
                    id: 2,
                    title: 'Federico Faggin Tribute Page',
                    text: 'This is Tribute page of Federico Faggin, Faggin is the designer of the Intel 4040 Processor.',
                    imgSrc: faggin,
                    live: 'https://codepen.io/redacuve/full/vYEKbLj',
                    source: 'https://codepen.io/redacuve/pen/vYEKbLj',
                    technology: ['HTML', 'CSS']
                },
                {
                    id: 3,
                    title: 'The Next Web Homepage',
                    text: 'This a imitation of the  layout of the News page https://thenextweb.com/. The structure of the page is build using Flexbox, Grids, Floats and it have semantic HTML tags.',
                    imgSrc: thenextweb,
                    live: 'https://rawcdn.githack.com/redacuve/Responsive-Design/32b3f799bfaaa0d2e08e152b660556e21a177151/index.html',
                    source: 'https://github.com/redacuve/Responsive-Design',
                    technology: ['HTML', 'CSS']
                },
                {
                    id: 4,
                    title: 'Smashing Magazine Heatmap',
                    text: 'This is a grayscale heat map of the website Smashing Magazine in this project every element have more gray if the elemten is greatest weight in the visual hierachy.',
                    imgSrc: smashingheatmap,
                    live: 'https://rawcdn.githack.com/fdezcaminero/SmashingUX/cd0444e0efd047668a7c1fb5140f387f45df08f1/index.html',
                    source: 'https://github.com/fdezcaminero/SmashingUX/tree/Front-Page',
                    technology: ['HTML', 'CSS']
                }
            ],
            rubyRails: [
                {
                    id: 0,
                    title: 'Tic Tac Toe Game',
                    text: 'This is my own version of the Game Tic Tac Toe, in México this game is called \'El juego del Gato\', is playable on the console. ',
                    imgSrc: juegogato,
                    live: null,
                    source: 'https://github.com/redacuve/Juego-Gato',
                    technology: ['Ruby']
                },
                {
                    id: 1,
                    title: 'MXN-USD Web Scrapper',
                    text: 'This is a USD-MXN web scraper. In México is very useful to know the value of the dollar every day, every bank here in Mexico has it own price of the dollar, this web scrapper goes to the webpage of every bank and scrap the value of the USD, then show it on the console, and saves it on a .csv file.',
                    imgSrc: webscrapper,
                    live: null,
                    source: 'https://github.com/redacuve/MXN-USD-Currency-Scraper/tree/mxn-usd-feature',
                    technology: ['Ruby']
                },
                {
                    id: 2,
                    title: 'Soduko Solver',
                    text: 'This is a sudoku solver, it read a sudoku from a csv file and tries to solve it. Project written in Ruby Languaje.',
                    imgSrc: soduko,
                    live: null,
                    source: 'https://github.com/redacuve/sudoku-solver',
                    technology: ['Ruby']
                },
                {
                    id: 3,
                    title: 'Lakastapp!',
                    text: 'This is a mobile web app where you can keep a record of every program you watch if the program is not in the database, is so easy to add that program!. With lakastapp you can know the time you watch every program.',
                    imgSrc: lakastapp,
                    live: 'https://lakastapp.herokuapp.com/',
                    source: 'https://github.com/redacuve/lakastapp',
                    technology: ['HTML', 'CSS', 'Ruby on Rails', 'Javascript']
                }
            ],
            javascriptReact: [
                {
                    id: 0,
                    title: 'My Portfolio',
                    text: 'This is my personal site, and its responsive, It has very useful components for easy for maintance.',
                    imgSrc: my-portfolio,
                    live: 'https://redacuve.github.io/my-portfolio/',
                    source: 'https://github.com/redacuve/my-portfolio',
                    technology: ['HTML', 'CSS', 'React']
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
            default:
                this.setState({default: 'htmlCss'});
                break;
        }
    }

    render(){
        return(
            <Container fluid={true} >
                    <Nav className="border-bottom justify-content-center c-indigo pb-2 mb-2">
                        <button className={this.state.default === 'htmlCss' ? "btn btn-link br-blue c-indigo font-weight-bolder" : "btn btn-link c-blue"} onClick={()=> this.changeDefault(1)}>HTML / CSS</button>
                        <button className={this.state.default === 'rubyRails' ? "btn btn-link br-blue c-indigo font-weight-bolder" : "btn btn-link c-blue"} onClick={()=> this.changeDefault(2)}>Ruby / Rails</button>
                        <button className={this.state.default === 'javascriptReact' ? "btn btn-link br-blue c-indigo font-weight-bolder" : "btn btn-link c-blue"} onClick={()=> this.changeDefault(3)}>Javascript / React</button>
                    </Nav>
                    <div className="projects-container d-flex justify-content-around flex-wrap">
                        {this.myProjects(this.state[this.state.default])}
                    </div>
            </Container>
        );
    }
}

export default Carrousel;