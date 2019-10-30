import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import VizBox from '../components/vizbox';

describe('VizBox', () => {
    it('should render a VizBox', () => {
        const wrapper = shallow(<VizBox/>);
    })
});