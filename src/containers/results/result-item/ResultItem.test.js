import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ResultItem from './ResultItem';

configure({adapter: new Adapter()});

describe('<ResultItem />', () => {

    let mockItem;

    beforeEach(() => {
        mockItem = {
            id: 111,
            title: 'Test Item',
            picture: 'https://link.to.picture/picture.jpg',
            price: {
                amount: 999,
                currency: 'ARS',
                decimals: 0
            },
            free_shipping: true,
            condition: 'new',
            address: 'Av siempreviva 444'
        }
    });
  
    it('should render free shipping icon', () => {
        const wrapper = shallow(<ResultItem item={mockItem}/>);
        expect(wrapper.find('.item-free-shipping')).toHaveLength(1);
    });

    it('should NOT render free shipping icon', () => {
        mockItem.free_shipping = false;
        const wrapper = shallow(<ResultItem item={mockItem}/>);
        expect(wrapper.find('.item-free-shipping')).toHaveLength(0);
    });

    it('should show new condition text', () => {
        const wrapper = shallow(<ResultItem item={mockItem}/>);
        expect(wrapper.find('.item-status').text()).toBe('Nuevo');
    });
   
    it('should show used condition text', () => {
        mockItem.condition = 'used';
        const wrapper = shallow(<ResultItem item={mockItem}/>);
        expect(wrapper.find('.item-status').text()).toBe('Usado');
    });
    
});