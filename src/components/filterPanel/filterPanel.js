import React, {Component} from 'react';

export default class FilterPanel extends Component {

    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'shop__filter-btn', label: 'Brazil'},
            {name: 'shop__filter-btn', label: 'Kenya'},
            {name: 'shop__filter-btn', label: 'Columbia'},
        ]
    }

    render() {
        const {onFilterSelect} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            return (
                <button 
                    key={label} 
                    type="button" 
                    className={name}
                    onClick={() => onFilterSelect(label)}
                >{label}</button>
            )
        });
        
        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}
