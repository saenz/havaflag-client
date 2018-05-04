/*
	see https://github.com/react-boilerplate/react-boilerplate/blob/master/app/containers/HomePage/tests/index.test.js
*/
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import Category from '../index';
import H2 from 'components/H2'

describe('<Category />', () => {
	it('renders with article header', () => {
		const wrapper = shallow(<Category match={{url:'/category',path:'/category',params:{name:'shoes'}}}/>);
  		const articleHeader = <H2>Category</H2>
		expect(wrapper).toContainReact(articleHeader)
	});
});