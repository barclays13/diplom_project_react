import React, {Component} from 'react';
import {Container, Row, Col } from 'reactstrap';
import Header from '../header';
import CoffeeItem from './coffeeItem';
import CoffeeServices from '../../services/coffeeServices';
import SearchPanel from '../searchPanel';
import './coffeepage.sass';

export default class CoffeePage extends Component{

    constructor (props) {
        super(props);
        this.state = {
            data : [],
            term: '',
        }
        this.onUpdateSerach = this.onUpdateSerach.bind(this);
    };

    async componentDidMount() {
        const coffeeServices = new CoffeeServices ();
        await coffeeServices.getAllCoffee()
            .then((data)  => {   
                this.setState({data})
            });
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter( (item) => {
            return item.name.toLowerCase().indexOf(term) > -1
        });
    }

    onUpdateSerach(term){
        this.setState({term})
    }

    render() {
        const {data, term} = this.state;
        const visiblePosts = this.searchPost(data, term);
        console.log('visiblePosts: ', visiblePosts);
        return (
            <>
                <div className="banner">
                    <Container>
                        <Header/>
                        <h1 className="title-big">Our Coffee</h1>
                    </Container>
                </div>
                <div className="shop">
                    <Container>
                        <Row>
                            <Col lg={{ size: 4, offset: 2 }}>
                                <img className="shop__girl" src="img/coffee_girl.jpg" alt="girl"></img>
                            </Col>
                            <Col lg="4">
                                <div className="title">About our beans</div>
                                <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"></img>
                                <div className="shop__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    <br></br><br></br>
                                    Afraid at highly months do things on at. Situation recommend objection do intention<br></br>
                                    so questions. <br></br>
                                    As greatly removed calling pleased improve an. Last ask him cold feel<br></br>
                                    met spot shy want. Children me laughing we prospect answered followed. At it went<br></br>
                                    is song that held help face.
                                </div>
                            </Col>
                        </Row>
                        <div className="line"></div>
                        <Row>
                            <Col lg={{ size: 4, offset: 2 }}>
                                <SearchPanel
                                    onUpdateSerach={this.onUpdateSerach}/>
                            </Col>
                            <Col lg="4">
                                <div className="shop__filter">
                                    <div className="shop__filter-label">
                                        Or filter
                                    </div>
                                    <div className="shop__filter-group">
                                        <button className="shop__filter-btn">Brazil</button>
                                        <button className="shop__filter-btn">Kenya</button>
                                        <button className="shop__filter-btn">Columbia</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col lg={{ size: 10, offset: 1 }}>
                                <CoffeeItem 
                                props={visiblePosts}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
} 





