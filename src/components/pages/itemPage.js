import React, {Component} from 'react';
import CoffeeServices from '../../services/coffeeServices';
import {Container} from 'reactstrap';
import Header from '../header';
import Item from './item';
import './coffeepage.sass';

export default class ItemPage extends Component{

    constructor(props){
        super(props);
        this.servicesItem();
        this.state = {
            data: []
        };
    }

    servicesItem(){
        const coffeeServices = new CoffeeServices ();
        coffeeServices.getAllCoffee()
            .then((data) => {   
                this.setState({
                    data
                })
            })
    }

    render() {
        const {data} =this.state;
        const {itemId} = this.props;
        const item = data.filter(item => item.name === itemId);

        return (
            <>
                <div className="banner">
                    <Container>
                        <Header/>
                        <h1 className="title-big">Our Coffee</h1>
                    </Container>
                </div>
                <section className="shop">
                        <Item item={item}/>
                </section>
            </>
        )
    }


    
} 