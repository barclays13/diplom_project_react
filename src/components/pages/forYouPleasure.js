import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../header';
import CoffeeItem from './coffeeItem';
import './forYouPleasure.sass';

export default class ForYouPleasure extends Component{
    render() {
        return (
            <>
                <div className="banner-2">
                    <Container>
                        <Header/>
                        <h1 className="title-big">For your pleasure</h1>
                    </Container>
                </div>
                <div className="shop">
                    <Container>
                        <Row>
                            <Col lg={{ size: 4, offset: 2 }}>
                                <span className="shop__for"></span>
                            </Col>
                            <Col lg="4">
                                <div className="title">About our goods</div>
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





