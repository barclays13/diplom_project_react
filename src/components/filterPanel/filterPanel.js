import React, {Component} from 'react';

export default class FilterPanel extends Component {

    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'shop__filter-btn-active', label: 'All'},
            {name: 'shop__filter-btn', label: 'Brazil'},
            {name: 'shop__filter-btn', label: 'Kenya'},
            {name: 'shop__filter-btn', label: 'Columbia'},
        ]
    }

    render() {
        const {onFilterSelect, filter} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const activeButton = filter === label;
            const activeCalss = activeButton ? 'shop__filter-btn-activ' : 'shop__filter-btn';
            return (
                <button 
                    key={label} 
                    type="button" 
                    className={activeCalss}
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
