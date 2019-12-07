import React, {Component} from 'react';
import {MainPage, CoffeePage, ItemPage, ForYouPleasure} from '../pages/';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Footer from '../footer';
import './style.sass';


export default class App extends Component {

    render() {

        return (
                <Router>
                    <Switch>
                        <Route path='/coffee' exact component={CoffeePage}/>
                        <Route path='/coffeeItem' component={ItemPage}/> 
                        <Route path='/for-you-pleasure'  component={ForYouPleasure}/>
                        <Route path='/main' component={MainPage}/>
                        <Redirect from='/' to='/main'/>
                    </Switch>
                    <Footer/>
                </Router>
                                    
        )
    }
}