import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../sass/header.sass';

export default class Header extends Component {
    render() {
        return (
            <div className="preview">
                <Container >
                    <Row>
                        <Col lg="6">
                        <ul className="header">
                                <li className="header__item">
                                    <Link to="/">
                                        <img src="logo/Logo.svg" alt="logo"></img>
                                    </Link>
                                </li>
                                <li className="header__item">
                                    <Link to="/coffee">Our coffee</Link>
                                </li>
                                <li className="header__item">
                                    <Link to="/for-you-pleasure">For your pleasure</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ size: 10, offset: 1 }}>
                            <h1 className="title-big">Everything You Love About Coffee</h1>
                            <img className="beanslogo" src="logo/Beans_logo.svg" alt="Beans logo"></img>
                            <div className="preview__subtitle">We makes every day full of energy and taste</div>
                            <div className="preview__subtitle">Want to try our beans?</div>
                            <Link to="/coffee" className="preview__btn">More</Link>
                    </Col>
                    </Row>
                </Container>
                </div>
        )
    }
}


