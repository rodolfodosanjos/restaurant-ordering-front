import React from 'react';
import { mount, render } from 'enzyme';
import OrderListItem from './OrderListItem.jsx';

const mockOrder = () => ({
	table: 'Mesa 25',
	notes: 'Sem pepino'
});

describe('OrderListItem', () => {

	test('should render main order info ', () => {
		const mockedOrder = mockOrder();
		const orderListItem = mount(<OrderListItem order={mockedOrder} />);
		expect(orderListItem.contains(mockedOrder.table)).toEqual(true);
		expect(orderListItem.contains(mockedOrder.notes)).toEqual(true);
	});

	describe('check for avatar', () => {

		const avatarSelector = '[class^="MuiAvatar"]';
		
		test('should just render table number inside order avatar', () => {
			const mockedOrder = mockOrder();
			const orderListItem = render(<OrderListItem order={mockedOrder} />);
			expect(orderListItem.find(avatarSelector).html()).toEqual('25');
		});

		test('should render nothing inside avatar when there is no parsable numbers in table', () => {
			const mockedOrder = mockOrder();
			mockedOrder.table = 'Mesa vinte cinco';
			const orderListItem = render(<OrderListItem order={mockedOrder} />);
			expect(orderListItem.find(avatarSelector).html()).toEqual('');
		});

	});

});