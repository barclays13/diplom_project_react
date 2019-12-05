import React, {Component} from 'react';
import Spinner from '../spinner';
import Error from '../error/';
import './coffeepage.sass';


export default class CoffeeItem extends Component {

        render(){
                const {loading, props, error } = this.props; 

                if (loading) {
                    return <Spinner/>
                }

                if (error) {
                    return <Error/>
                }

                const element = props.map(item=>{
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
