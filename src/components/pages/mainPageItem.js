import React, {Component} from 'react';
import CoffeeServices from '../../services/coffeeServices';
import Spinner from '../spinner';
import Error from '../error';
import ItemPage from './itemPage';
import './mainpage.sass';



export default class MainPageItem extends Component {

        constructor(props){
            super(props);
            this.servicesItem();
            this.state = {
                data: [],
                loading:true,
                error: false,
                itemId: ''
            };
            this.onOpenCart = this.onOpenCart.bind(this);
        } 

        servicesItem(){
            const coffeeServices = new CoffeeServices ();
            coffeeServices.getAllBestsellers()
                .then((data) => {   
                    this.setState({
                        data,
                        loading:false,
                        error: false
                    })
                })
                .catch((data) => {   
                    this.setState({
                        data,
                        loading:false,
                        error: true
                    })
                });
        }

         onOpenCart(e){
            e = e || window.event;         
            const el = e.target || e.srcElement;
            this.props.updateData(el.parentElement.id);
            this.setState({
                itemId: el.parentElement.id
            })
          };

        render(){
            const {loading, error, itemId} = this.state;
            
            if(itemId){                
                return <ItemPage itemId={itemId}/> 
            }
            
            if (error) {
                return <Error/>
            }

            if (loading) {
                return <Spinner/>
            }
            
            const element = this.state.data.map((item)=>{
                const id = item.name;
                return(
                    <div 
                        className="best__item" 
                        key={id}
                        id={id}>
                        <img  alt="coffee" src= {item.url}></img>
                        <div className="best__item-title">
                            {item.name}
                        </div>
                        <div className="best__item-price">{item.price}</div>
                    </div>
                )
            })

            return(
                <div 
                    className="best__wrapper"
                    onClick={this.onOpenCart}>
                    {element}
                </div>
            )
        }
} 
