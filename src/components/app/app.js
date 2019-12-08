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
                        <Route path='/coffee/:id' render={
                            ({match})=>{
                                const {id} = match.params;
                                return <ItemPage itemId={id}/>
                            }}/>
                        <Route path='/for-you-pleasure'  component={ForYouPleasure}/>
                        <Route path='/main' exact render={()=> <MainPage updateDatas={this.updateDatas}/> }/>
                        <Route path='/main/:id' render={
                            ({match})=>{
                                const {id} = match.params;
                                return <ItemPage itemId={id}/>
                            }}/>
                        <Redirect from='/' to='/main'/>
                    </Switch>
                    <Footer/>
                </Router>
                                    
        )
    }
}