import React from 'react';
import { mount } from 'enzyme';
import OrderFormDialog from './OrderFormDialog.jsx';

const mockOrder = () => ({
	table: 'Mesa 50',
	notes: 'Com pepino'
});

const voidFunction = () => {};

describe('OrderForm', () => {

	test('should display edit order text', () => {
		const mockedOrder = mockOrder();
		const wrapper = mount(
			<OrderFormDialog
				onClose={voidFunction}
				open={true}
				orderToUpdate={mockedOrder} />);
		expect(wrapper.contains('Editar pedido')).toEqual(true);
		expect(wrapper.contains('Criar pedido')).toEqual(false);
	});

	test('should display create order text', () => {
		const wrapper = mount(<OrderFormDialog
			onClose={voidFunction}
			open={true}/>);
		expect(wrapper.contains('Editar pedido')).toEqual(false);
		expect(wrapper.contains('Criar pedido')).toEqual(true);
	});

});