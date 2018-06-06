import React from 'react';
import { mount } from 'enzyme';
import OrderSavePresentational from './OrderSavePresentational.jsx';

const mockOrder = () => ({
	table: 'Mesa 50',
	notes: 'Com pepino'
});

const voidFunction = () => {};

describe('OrderSavePresentational', () => {

	test('should display edit order text', () => {
		const mockedOrder = mockOrder();
		const wrapper = mount(
			<OrderSavePresentational
				createOrder={voidFunction}
				updateOrder={voidFunction}
				orderToEdit={mockedOrder} />);
		expect(wrapper.contains('Editar pedido')).toEqual(true);
		expect(wrapper.contains('Criar pedido')).toEqual(false);
	});

	test('should display create order text', () => {
		const wrapper = mount(
			<OrderSavePresentational
				createOrder={voidFunction}
				updateOrder={voidFunction} />);
		expect(wrapper.contains('Editar pedido')).toEqual(false);
		expect(wrapper.contains('Criar pedido')).toEqual(true);
	});

});