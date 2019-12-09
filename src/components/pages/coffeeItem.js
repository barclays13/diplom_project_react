import React, {Component} from 'react';
import Spinner from '../spinner';
import Error from '../error/';
import ItemPage from './itemPage';
import './coffeepage.sass';


export default class CoffeeItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            itemId: ''
        }
        this.onOpenCart = this.onOpenCart.bind(this);
    } 

    onOpenCart(e){
        e = e || window.event;
        let el = e.target || e.srcElement;
        this.props.updateData(el.parentElement.id);
        this.setState({
            itemId: el.parentElement.id
        })
    }

        render(){
                const {loading, visiblePosts, error} = this.props; 
                const {itemId} = this.state;

                if (loading) {
                    return <Spinner/>
                }

                if(itemId){
                    return <ItemPage itemId={itemId}/>
                }

                if (error) {
                    return <Error/>
                }

                const element = visiblePosts.map(item=>{
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
                <div className="shop__wrapper"
                    onClick={this.onOpenCart}>
                    {element}
                </div>
            )
        }
} 

