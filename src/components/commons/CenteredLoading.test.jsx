import React from 'react';
import { shallow } from 'enzyme';
import CenteredLoading from './CenteredLoading.jsx';
import CircularProgress from '@material-ui/core/CircularProgress';

describe('CenteredLoading', () => {

	const content = 'Content';

	test('should display loading when is loading and hide children', () => {
		const wrapper = shallow(<CenteredLoading isLoading={true}>{content}</CenteredLoading>);
		expect(wrapper.contains(<CircularProgress />)).toEqual(true);
		expect(wrapper.html()).not.toContain(content);
	});

	test('should display children and hide loading when its not loading', () => {
		const wrapper = shallow(<CenteredLoading isLoading={false}>{content}</CenteredLoading>);
		expect(wrapper.contains(<CircularProgress />)).toEqual(false);
		expect(wrapper.html()).toContain(content);
	});

});