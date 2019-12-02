import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../sass/coffeepage.sass';

export default class CoffeePage extends Component{
    render() {
        return (
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
                                <div className="shop__wrapper">
                                    <div className="shop__item">
                                        <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                                        <div className="shop__item-title">
                                            Solimo Coffee Beans 2kg
                                        </div>
                                        <div className="shop__item-country">Brazil</div>
                                        <div className="shop__item-price">10.73$</div>
                                    </div>
                                    <div className="shop__item">
                                        <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                                        <div className="shop__item-title">
                                            Presto Coffee Beans 1kg
                                        </div>
                                        <div className="shop__item-country">Brazil</div>
                                        <div className="shop__item-price">15.99$</div>
                                    </div>
                                    <div className="shop__item">
                                        <img src="https://hhp-blog.s3.amazonaws.com/2018/07/iStock-673468996.jpg" alt="coffee"></img>
                                        <div className="shop__item-title">
                                            AROMISTICO Coffee 1kg
                                        </div>
                                        <div className="shop__item-country">Brazil</div>
                                        <div className="shop__item-price">6.99$</div>
                                    </div>
                                    <div className="shop__item">
                                        <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                                        <div className="shop__item-title">
                                            Solimo Coffee Beans 2kg
                                        </div>
                                        <div className="shop__item-country">Brazil</div>
                                        <div className="shop__item-price">10.73$</div>
                                    </div>
                                    <div className="shop__item">
                                        <img src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/AN_images/AN275-cup-of-coffee-732x549-Thumb.jpg?w=756" alt="coffee"></img>
                                        <div className="shop__item-title">
                                            Solimo Coffee Beans 2kg
                                        </div>
                                        <div className="shop__item-country">Brazil</div>
                                        <div className="shop__item-price">10.73$</div>
                                    </div>
                                    <div className="shop__item">
                                        <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                                        <div className="shop__item-title">
                                            Solimo Coffee Beans 2kg
                                        </div>
                                        <div className="shop__item-country">Brazil</div>
                                        <div className="shop__item-price">10.73$</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
        )
    }
} 





