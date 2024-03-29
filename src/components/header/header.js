import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from "./Logo.svg";
import './header.sass';

export default class Header extends Component {
    render() {
        return (
                <Container >
                    <Row>
                        <Col lg="6">
                        <ul className="header">
                                <li className="header__item">
                                    <Link to="/main/">
                                        <img src={logo} alt="logo"></img>
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
                </Container>
        )
    }
}


