import React, {Component} from 'react';

export default class SearchPanel extends Component {

    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSerach = this.onUpdateSerach.bind(this);
    }

    onUpdateSerach(event) {
        const term = event.target.value;
        this.setState({term});
        this.props.onUpdateSerach(term);
    }

    render(){
        return(
        <form action="#" className="shop__search">
            <label className="shop__search-label" htmlFor="filter">Looking for</label>
            <input 
                id="filter" 
                type="text" 
                placeholder="start typing here..." 
                className="shop__search-input"
                onChange={this.onUpdateSerach}></input>
        </form>
        )
    }
}