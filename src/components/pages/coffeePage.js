import React, {Component} from 'react';
import {Container, Row, Col } from 'reactstrap';
import Header from '../header';
import CoffeeItem from './coffeeItem';
import './coffeepage.sass';

export default class CoffeePage extends Component{
    
    render() {
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
                                <form action="#" className="shop__search">
                                    <label className="shop__search-label" for="filter">Looking for</label>
                                    <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"></input>
                                </form>
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
                                <CoffeeItem/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
} 





