import React from 'react';
import FilterPanel from './filterPanel';
import {shallow} from 'enzyme';

describe('Testing <FilterPanel>', () => {
    it ('FilterPanel have renderer correctly', () => {
    const filter = shallow(<FilterPanel/>);
    expect(filter).toMatchSnapshot();
    })
});