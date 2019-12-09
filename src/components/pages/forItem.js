import React, {Component} from 'react';
import Spinner from '../spinner';
import Error from '../error';
import './coffeepage.sass';


export default class ForItem extends Component {
        render(){
                const {loading, data, error} = this.props; 
                if (loading) {
                    return <Spinner/>
                }


                if (error) {
                    return <Error/>
                }

                const element = data.map(item=>{
                const {url, name, country, price} = item;
                const id = name;

                    return(
                        <div 
                            className="shop__item" 
                            key = {id}
                            id={id}>
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
