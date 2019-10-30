import React from 'react';
import { mount } from 'enzyme';
import VizColumn from '../components/vizcolumn';
import sinon from 'sinon';

describe('VizColumn', () => {
    const boxes = [1, 2, 3]
    it('should render a VizColumn with a box array', () => {
        const wrapper = mount(<VizColumn column={{boxes: boxes}}/>)
    });

    it('should receive a box array as a prop', () => {
        const wrapper = mount(<VizColumn column={{boxes: boxes}}/>);
        const spy = sinon.spy(VizColumn.prototype, 'componentWillReceiveProps');

        expect(wrapper.props().column.boxes.length).toBe(3);

        wrapper.setProps({column: {boxes: [1]}});

        expect(wrapper.props().column.boxes.length).toBe(1);
        sinon.assert.callCount(spy, 1);
    });

    it('should add a box to the column', () => {
        const wrapper = mount(<VizColumn column={{boxes: boxes}} onAddBox={jest.fn()}/>);
        const instance = wrapper.instance();

        instance.addColumnBox();
        expect(wrapper.state('boxArr').length).toBe(4);
    });

    it('should subtract a box from the column', () => {
        let newBoxes = [1, 2];
        const wrapper = mount(<VizColumn column={{boxes: newBoxes}}/>);
        const instance = wrapper.instance();

        instance.subtractColumnBox();
        expect(wrapper.state('boxArr').length).toBe(1);
    });

    it('should remove an individual column', () => {
        const removeStub = {
            removeIndividualColumn: jest.fn()
        }

        const wrapper = mount(<VizColumn column={{boxes: boxes}} removeIndividualColumn={removeStub.removeIndividualColumn}/>);
        const instance = wrapper.instance();

        instance.removeIndividualColumn();

        expect(removeStub.removeIndividualColumn).toHaveBeenCalled();
    });
});