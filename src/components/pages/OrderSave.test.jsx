import React from 'react';
import { mount } from 'enzyme';
import OrderSave from './OrderSave.jsx';

const mockOrder = () => ({
	table: 'Mesa 50',
	notes: 'Com pepino'
});

const voidFunction = () => {};

describe('OrderSave', () => {

	test('should display edit order text', () => {
		const mockedOrder = mockOrder();
		const wrapper = mount(
			<OrderSave
				orderToEdit={voidFunction}
				createOrder={voidFunction}
				updateOrder={voidFunction}
				orderToUpdate={mockedOrder} />);
		expect(wrapper.contains('Editar pedido')).toEqual(true);
		expect(wrapper.contains('Criar pedido')).toEqual(false);
	});

	test('should display create order text', () => {
		const wrapper = mount(
			<OrderSave
				orderToEdit={voidFunction}
				createOrder={voidFunction}
				updateOrder={voidFunction} />);
		expect(wrapper.contains('Editar pedido')).toEqual(false);
		expect(wrapper.contains('Criar pedido')).toEqual(true);
	});

});