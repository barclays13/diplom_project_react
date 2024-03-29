import React, {Component} from 'react';
import CoffeeServices from '../../services/coffeeServices';
import {Container, Row, Col} from 'reactstrap';
import Header from '../header';
import Spinner from '../spinner';
import Error from '../error/';
import BeansLogoDark from '../../logo/Beans_logo_dark.svg';
import './coffeepage.sass';

export default class ItemPage extends Component{

    constructor(props){
        super(props);
        this.servicesItem();
        this.state = {
            data: [], 
            loading: true,
            error: false
        };
    }

    servicesItem(){
        const coffeeServices = new CoffeeServices ();
        coffeeServices.getAllCoffee()
        .then((data)  => {   
            this.setState({
                data,
                loading:false,
                error: false
            })
        })
        .catch((data)  => {   
            this.setState({
                data,
                loading:false,
                error: true
            })
        });
    }

    render() {
        
        const {itemId} = this.props;
        const {data, loading, error} =this.state;
        const item = data.filter(item => item.name === itemId);

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <Error/>
        }

        if (item[0] === undefined)  {
            return (
                <>
                <div className="banner">
                    <Container>
                        <Header/>
                        <h1 className="title-big">Our Coffee</h1>
                    </Container>
                </div>
                <section className="shop">
                        <Error/>
                </section>
            </>
            )
            
        } else {
            const {name, url, country, description, price} = item[0];
                return (
                    <>
                        <div className="banner">
                            <Container>
                                <Header/>
                                <h1 className="title-big">Our Coffee</h1>
                            </Container>
                        </div>
                        <section className="shop">
                            <Container>
                            <Row>
                                <Col lg={{ size: 5, offset: 1 }}>
                                    <img className="shop__girl" src={url} style = {{width: "100%"}} alt="coffee_item"></img>
                                </Col>
                                <Col lg="4">
                                    <div className="title">{name}</div>
                                    <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                                
                                    <div className="shop__point">
                                        <span>Country:</span>
                                        {country}
                                    </div>
                                    <div className="shop__point">
                                        <span>Description:</span>
                                        {description}
                                    </div>
                                    <div className="shop__point">
                                        <span>Price:</span>
                                        <span className="shop__point-price">{price}</span>
                                    </div>
                                    </Col>
                                </Row>
                                </Container>
                        </section>
                    </>
                )
        }
    }
} 