import React from 'react';
import { shallow, render } from 'enzyme';
import OrderSaveForm from './OrderSaveForm.jsx';

const mockOrder = () => ({
	table: 'Mesa 25',
	notes: 'Sem pepino',
	products: []
});

describe('OrderSaveForm', () => {

	test('should fill form inputs with order info when its updating', () => {
		const mockedOrder = mockOrder();
		const wrapper = render(<OrderSaveForm orderToUpdate={mockedOrder} />);
		expect(wrapper.find('#notes')[0].attribs.value).toEqual(mockedOrder.notes);
		expect(wrapper.find('#table')[0].attribs.value).toEqual(mockedOrder.table);
	});

	test('should change state when input changes', () => {
		const mockedOrder = mockOrder();
		const fakeTable = 'Mesa 50';
		const fakeNotes = 'Com pepino';
		const wrapper = shallow(<OrderSaveForm orderToUpdate={mockedOrder} />);
		const tableInput = wrapper.find('#table').first();
		const notesInput = wrapper.find('#notes').first();

		tableInput.simulate('change', { target: { value: fakeTable } });
		notesInput.simulate('change', { target: { value: fakeNotes } });
		
		expect(wrapper.state().table).toEqual('Mesa 50');
		expect(wrapper.state().notes).toEqual(fakeNotes);
	});

});