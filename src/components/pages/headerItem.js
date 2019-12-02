import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../sass/coffeepage.sass';

export default class HeaderItems extends Component {
    render() {
        return (
            <div className="banner">
                <Container>
                    <Row>
                        <Col lg="6">
                            <header>
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
                            </header>
                        </Col>
                    </Row>
                    <h1 className="title-big">Our Coffee</h1>
                </Container>
            </div>
        )
    }
}


