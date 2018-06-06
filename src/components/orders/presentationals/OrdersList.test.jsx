import React from 'react';
import { shallow } from 'enzyme';
import OrdersList from './OrdersList.jsx';
import OrderListItem from './OrderListItem.jsx';

const mockOrders = () => ([{
	_id: 123,
	table: 'Mesa 25',
	notes: 'Sem pepino',
	products: []
}, {
	_id: 321,
	table: 'Mesa 50',
	notes: 'Com pepino',
	products: []
}]);

test('check if all orders were rendered', () => {
	const mockedOrders = mockOrders();
	const orders = shallow(<OrdersList isLoading={false} orders={mockedOrders} />);
	expect(orders.find(OrderListItem)).toHaveLength(2);
});