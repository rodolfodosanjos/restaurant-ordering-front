import React from 'react';
import { mount, render } from 'enzyme';
import OrdersListItem from './OrdersListItem.jsx';

const mockOrder = () => ({
	table: 'Mesa 25',
	notes: 'Sem pepino'
});

describe('OrdersListItem', () => {

	test('should render main order info ', () => {
		const mockedOrder = mockOrder();
		const ordersListItem = mount(<OrdersListItem order={mockedOrder} />);
		expect(ordersListItem.contains(mockedOrder.table)).toEqual(true);
		expect(ordersListItem.contains(mockedOrder.notes)).toEqual(true);
	});

	describe('check for avatar', () => {

		const avatarSelector = '[class^="MuiAvatar"]';
		
		test('should just render table number inside order avatar', () => {
			const mockedOrder = mockOrder();
			const ordersListItem = render(<OrdersListItem order={mockedOrder} />);
			expect(ordersListItem.find(avatarSelector).html()).toEqual('25');
		});

		test('should render nothing inside avatar when there is no parsable numbers in table', () => {
			const mockedOrder = mockOrder();
			mockedOrder.table = 'Mesa vinte cinco';
			const ordersListItem = render(<OrdersListItem order={mockedOrder} />);
			expect(ordersListItem.find(avatarSelector).html()).toEqual('');
		});

	});

});