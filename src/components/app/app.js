import React, {Component} from 'react';
import {MainPage, CoffeePage, ItemPage, ForYouPleasure} from '../pages/';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from '../footer';
import '../../style.sass';


export default class App extends Component {
    render() {
        return (
                <Router>
                    <Switch>
                        <Route path='/' exact  component={MainPage} />
                        <Route path='/coffee'  component={CoffeePage}/>
                        <Route path='/for-you-pleasure'  component={ForYouPleasure}/>
                    </Switch>
                    
                    {/*<ItemPage/> */}
                    <Footer/>
                </Router>
                                    
        )
    }
}