import React from 'react';
import { shallow } from 'enzyme';
import FullscreenDialog from './FullscreenDialog.jsx';
import CloseDialogButton from './CloseDialogButton.jsx';

describe('FullscreenDialog', () => {

	const voidFunction = () => {};

	test('should display close button when its NOT defined to hide', () => {
		const wrapper = shallow(
		<FullscreenDialog
			open={true}
			onClose={voidFunction}>
			<div></div>
		</FullscreenDialog>);
		expect(wrapper.contains(<CloseDialogButton onClose={voidFunction} />)).toEqual(true);
	});

	test('should not display close button when its defined to hide', () => {
		const wrapper = shallow(
		<FullscreenDialog
			open={true}
			onClose={voidFunction}
			hideCloseButton={true}>
			<div></div>
		</FullscreenDialog>);
		expect(wrapper.contains(<CloseDialogButton onClose={voidFunction} />)).toEqual(false);
	});

});