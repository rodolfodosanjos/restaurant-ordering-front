import React from 'react';
import { mount } from 'enzyme';
import OrderDialogOpenButton from './presentationals/OrderDialogOpenButton.jsx';
import OrderFormDialog from '../pages/OrderFormDialog.jsx';
import PageMainButton from '../commons/PageMainButton.jsx';

describe('OrderDialogOpenButton', () => {

	test('should start dialog closed and after click, open it', () => {
		const wrapper = mount(<OrderDialogOpenButton />);

		expect(wrapper.find(OrderFormDialog).get(0).props.open).toEqual(false);
		wrapper.find(PageMainButton).simulate('click');
		expect(wrapper.find(OrderFormDialog).get(0).props.open).toEqual(true);
	});

});