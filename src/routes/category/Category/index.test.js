/*
	see https://github.com/react-boilerplate/react-boilerplate/blob/master/app/containers/HomePage/tests/index.test.js
*/
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import Category from '../index';

describe('<Category />', () => {
	it('renders with article header', () => {
		const wrapper = shallow(<Category match={{url:'/category',path:'/category',params:{name:'shoes'}}}/>);
  		const articleHeader = <h2>Category</h2>
		expect(wrapper).toContainReact(articleHeader)
	});
});