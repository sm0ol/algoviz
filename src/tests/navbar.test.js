import React from 'react';
import { mount } from 'enzyme';
import Navbar from '../components/navbar';
import sinon from 'sinon';

describe('Navbar', () => {
    it('should render the navbar', () => {
        const wrapper = mount(<Navbar/>);
    });

    it('should add a column', () => {
        const addColumnMock = {
            updateColumnArr: jest.fn()
        }

        const wrapper = mount(<Navbar updateColumnArr={addColumnMock.updateColumnArr} columnArr={[1]}/>);
        const instance = wrapper.instance();

        expect(wrapper.props().columnArr.length).toBe(1);

        instance.addColumn();

        expect(wrapper.props().columnArr.length).toBe(2);
        expect(addColumnMock.updateColumnArr).toHaveBeenCalled();
    });

    it('should call bubble sort', () => {
        const bubbleMock = {
            bubbleSort: jest.fn()
        }

        const wrapper = mount(<Navbar bubbleSort={bubbleMock.bubbleSort}/>);
        const instance = wrapper.instance();

        instance.bubbleSort();

        expect(bubbleMock.bubbleSort).toHaveBeenCalled();
    });

    it('should call to clear the content on the screen', () => {
        const clearMock = {
            clearContent: jest.fn()
        }

        const wrapper = mount(<Navbar clearContent={clearMock.clearContent}/>);
        const instance = wrapper.instance();

        instance.clearContent();

        expect(clearMock.clearContent).toHaveBeenCalled();
    });
});