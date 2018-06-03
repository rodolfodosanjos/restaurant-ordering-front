import React from 'react';
import { shallow, render } from 'enzyme';
import OrderForm from './OrderForm.jsx';

const mockOrder = () => ({
	table: 'Mesa 25',
	notes: 'Sem pepino',
	products: []
});

describe('OrderForm', () => {

	test('should fill form inputs with order info when its updating', () => {
		const mockedOrder = mockOrder();
		const orderForm = render(<OrderForm orderToUpdate={mockedOrder} />);
		expect(orderForm.find('#notes')[0].attribs.value).toEqual(mockedOrder.notes);
		expect(orderForm.find('#table')[0].attribs.value).toEqual(mockedOrder.table);
	});

	test('should change state when input changes', () => {
		const mockedOrder = mockOrder();
		const fakeTable = 'Mesa 50';
		const fakeNotes = 'Com pepino';
		const orderForm = shallow(<OrderForm orderToUpdate={mockedOrder} />);
		const tableInput = orderForm.find('#table').first();
		const notesInput = orderForm.find('#notes').first();

		tableInput.simulate('change', { target: { value: fakeTable } });
		notesInput.simulate('change', { target: { value: fakeNotes } });
		
		expect(orderForm.state().table).toEqual('Mesa 50');
		expect(orderForm.state().notes).toEqual(fakeNotes);
	});

});