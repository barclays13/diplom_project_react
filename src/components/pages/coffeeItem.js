import React, {Component} from 'react';
import CoffeeServices from '../../services/coffeeServices';
import './coffeepage.sass';


export default class CoffeeItem extends Component {

        state = {
            data: []
        }
        
        componentWillMount () {
            const coffeeServices = new CoffeeServices ();
            coffeeServices.getAllCoffee()
                .then((data) => {   
                    this.setState({data})
                });
        }

        render(){
            const element = this.state.data.map(item=>{
            const {url, name, country, price} = item;
            const id = name.trim();
                return(
                    <div className="shop__item" key = {id}>
                        <img src={url} alt="coffee"></img>
                        <div className="shop__item-title">
                            {name}
                        </div>
                <div className="shop__item-country">{country}</div>
                        <div className="shop__item-price">{price}</div>
                    </div>
                )
                
            })
            return(
                <div className="shop__wrapper">
                    {element}
                </div>
            )
        }
} 
