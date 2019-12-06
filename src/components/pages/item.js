import React, {Component} from 'react';
import {Row, Col } from 'reactstrap';
import './coffeepage.sass';

export default class Item extends Component{


    render() {
        const {item} = this.props;

        if (item[0] === undefined)  {
            return (
                <>
                </>
            )
        } else {
            const {name, url, country, description, price} = item[0];
            console.log('name: ', name);
            return (
                <>
                    <Row>
                        <Col lg={{ size: 5, offset: 1 }}>
                            <img className="shop__girl" src={url} style = {{width: "100%"}} alt="coffee_item"></img>
                        </Col>
                        <Col lg="4">
                            <div className="title">{name}</div>
                            <img className="beanslogo" src="../../logo/Beans_logo_dark.svg" alt="Beans logo"></img>
                        
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
                </>
            )
        }


        }


    
} 