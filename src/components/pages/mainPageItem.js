import React, {Component} from 'react';
import CoffeeServices from '../../services/coffeeServices';
import Spinner from '../spinner';
import Error from '../error/';
import './mainpage.sass';


export default class MainPageItem extends Component {

        constructor(props){
            super(props);
            this.state = {
                data: [],
                loading:true,
                error: false
            };
        } 

        componentWillMount () {
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

        render(){
            
            const {loading, error} = this.state;
            if (error) {
                return <Error/>
            }

            if (loading) {
                return <Spinner/>
            }
            
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
