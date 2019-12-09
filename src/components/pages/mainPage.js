import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../header';
import MainPageItem from './mainPageItem';
import Error from '../error';
import {Link, withRouter} from 'react-router-dom';
import beansLogo from '../../logo/Beans_logo.svg';
import BeansLogoDark from '../../logo/Beans_logo_dark.svg';
import './mainpage.sass';

class MainPage extends Component{
    constructor(){
        super();
        this.state = {
            errorMessage: false,
            itemId:''
         };
    }

    componentDidCatch(){
        this.setState({
            errorMessage:true
        });
    }

    updateData = (value) => {
        this.setState({
            itemId:value
        })
        this.props.updateDatas(value);
     }

    render() {

        if (this.state.errorMessage){
            return <Error/>
        }

        return (
            <>      
                <div className="preview">
                    <Container >
                        <Header/>
                        <Row>
                            <Col lg={{ size: 10, offset: 1 }}>
                                <h1 className="title-big">Everything You Love About Coffee</h1>
                                <img className="beanslogo" src={beansLogo} alt="Beans logo"></img>
                                <div className="preview__subtitle">We makes every day full of energy and taste</div>
                                <div className="preview__subtitle">Want to try our beans?</div>
                                <Link to="/coffee" className="preview__btn">More</Link>
                        </Col>
                        </Row>
                    </Container>
                </div>
                <div className="about">
                    <Container>
                        <Row>
                            <Col lg={{ size: 6, offset: 3 }}>
                                <div className="title">About Us</div>
                                <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                                <div className="about__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.<br></br><br></br>

                                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                    horrible but confined day end marriage. Eagerness furniture set preserved far
                                    recommend. Did even but nor are most gave hope. Secure active living depend son
                                    repair day ladies now.
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="best">
                    <Container>
                        <div className="title">Our best</div>
                        <Row>
                            <Col lg={{ size: 10, offset: 1 }}>
                                    <MainPageItem 
                                        updateData={(itemId) =>this.props.history.push(`/main/${itemId}`)}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
} 

export default withRouter(MainPage);