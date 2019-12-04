import React, {Component} from 'react';
import CoffeeServices from '../../services/coffeeServices';
import './mainpage.sass';


export default class MainPageItem extends Component {

        state = {
            data: []
        }
    
        componentWillMount () {
            const coffeeServices = new CoffeeServices ();
            coffeeServices.getAllBestsellers()
                .then((data) => {   
                    this.setState({data})
                });
        }

        render(){
            const element = this.state.data.map(item=>{
            const id = item.name.trim();
                return(
                    <div className="best__item" key={id}>
                        <img  alt="coffee" src= {item.url}></img>
                        <div className="best__item-title">
                            {item.name}
                        </div>
                        <div className="best__item-price">{item.price}</div>
                    </div>
                )
                
            })
            return(
                <>
                    {element}
                </>
            )
        }
} 
