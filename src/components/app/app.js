import React, {Component} from 'react';
import {MainPage, CoffeePage, ItemPage, ForYouPleasure} from '../pages/';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Footer from '../footer';
import './style.sass';


export default class App extends Component {

    render() {
        const {itemId} = this.props;
        return (
                <Router>
                    <Switch>
                        <Route path='/coffee'  component={CoffeePage}/>
                        <Route path='/for-you-pleasure'  component={ForYouPleasure}/>
                        <Route path='/' exact component={MainPage} />
                        <Route path='/:itemId' render={
                            ({match}) => {
                                const {itemId} = match.params;
                            return <ItemPage itemId={itemId}/>}
                        }/> 
                        <Redirect from='/' to='/'/>
                    </Switch>
                    <Footer/>
                </Router>
                                    
        )
    }
}