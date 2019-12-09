import React from 'react';
import SearchPanel from './searchPanel';
import {shallow} from 'enzyme';


describe('Testing <SearchPanel>', () => {
    it ('SearchPanel have renderer correctly', () => {
    const search = shallow(<SearchPanel/>);
    expect(search).toMatchSnapshot();
    })
});