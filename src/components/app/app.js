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
                        <Route path='/coffee'  component={CoffeePage}/>
                        <Route path='/for-you-pleasure'  component={ForYouPleasure}/>
                        <Route path='/'  component={MainPage} />
                        {/* <Route path='/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                            return <ItemPage itemId={id}/>}
                        }/> */}
                        <Redirect from='/' to='/'/>
                    </Switch>
                    <Footer/>
                </Router>
                                    
        )
    }
}