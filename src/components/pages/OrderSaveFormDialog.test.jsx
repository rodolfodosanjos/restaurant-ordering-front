import React from 'react';
import { mount } from 'enzyme';
import OrderSaveFormDialog from './OrderSaveFormDialog.jsx';

const mockOrder = () => ({
	table: 'Mesa 50',
	notes: 'Com pepino'
});

const voidFunction = () => {};

describe('OrderSaveFormDialog', () => {

	test('should display edit order text', () => {
		const mockedOrder = mockOrder();
		const wrapper = mount(
			<OrderSaveFormDialog
				onClose={voidFunction}
				open={true}
				orderToUpdate={mockedOrder} />);
		expect(wrapper.contains('Editar pedido')).toEqual(true);
		expect(wrapper.contains('Criar pedido')).toEqual(false);
	});

	test('should display create order text', () => {
		const wrapper = mount(<OrderSaveFormDialog
			onClose={voidFunction}
			open={true}/>);
		expect(wrapper.contains('Editar pedido')).toEqual(false);
		expect(wrapper.contains('Criar pedido')).toEqual(true);
	});

});