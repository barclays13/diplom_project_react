import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import logoBlack from '../../logo/Logo_black.svg';
import BeansLogoDark from '../../logo/Beans_logo_dark.svg';
import './footer.sass';


export default class Footer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={{ size: '5', offset: 4 }}>
                        <ul className="footer">
                            <li className="footer__item">
                                <Link to="/">
                                    <img src={logoBlack} alt="logo"></img>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/coffee">Our coffee</Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/for-you-pleasure">For your pleasure</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
            </Container>
        )
    }
}