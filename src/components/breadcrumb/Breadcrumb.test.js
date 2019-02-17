import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Breadcrumb from './Breadcrumb';

configure({adapter: new Adapter()});

describe('<Breadcrumb />', () => {
   
    it('should render empty Breadcrumb', () => {
        const categories = [];
        const breadcrumb = shallow(<Breadcrumb categories={categories}/>);
        expect(breadcrumb.text()).toBe('');
    });

    it('should render one category', () => {
        const categories = ['category 1'];
        const breadcrumb = shallow(<Breadcrumb categories={categories}/>);
        expect(breadcrumb.text()).toBe('category 1');
    });

    it('should render two categories', () => {
        const categories = ['category 1', 'category 2'];
        const breadcrumb = shallow(<Breadcrumb categories={categories}/>);
        expect(breadcrumb.text()).toBe('category 1 > category 2');
    });
    
});