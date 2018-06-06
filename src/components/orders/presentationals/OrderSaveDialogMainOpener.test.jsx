import React from 'react';
import { mount } from 'enzyme';
import OrderDialogMainOpener from './presentationals/OrderDialogMainOpener.jsx';
import OrderSaveDialog from '../pages/OrderSaveDialog.jsx';
import PageMainButton from '../commons/PageMainButton.jsx';

describe('OrderDialogMainOpener', () => {

	test('should start dialog closed and after click, open it', () => {
		const wrapper = mount(<OrderDialogMainOpener />);

		expect(wrapper.find(OrderSaveDialog).get(0).props.open).toEqual(false);
		wrapper.find(PageMainButton).simulate('click');
		expect(wrapper.find(OrderSaveDialog).get(0).props.open).toEqual(true);
	});

});