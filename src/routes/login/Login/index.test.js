/*
	see https://github.com/react-boilerplate/react-boilerplate/blob/master/app/containers/HomePage/tests/index.test.js
*/
import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-enzyme';
import Login from './index';
import H2 from 'components/H2'

describe('<Login />', () => {

	it('renders with article header', () => {
		const mockCallback = jest.fn()

		const wrapper = shallow(<Login userHasAuthenticated={mockCallback}/>);
  		const articleHeader = <H2>Login</H2>
		expect(wrapper).toContainReact(articleHeader)
	});

	it('login button has been found and clicked', () => {
		const mockCallback = jest.fn()
		mockCallback.mockReturnValue(true).mockImplementation(()=>{})

		let page = <Login userHasAuthenticated={mockCallback}/>;
		let pageMounted = mount(page);

		const button = pageMounted.find('button');
		expect(button.length).toBe(1); 
		
		button.simulate('click');
		expect(mockCallback.mock.calls.length).toBe(1);
	});
});