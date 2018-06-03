import React from 'react';
import PropTypes from 'prop-types';
import Products from './Products.jsx';
import FullscreenDialog from '../commons/FullscreenDialog.jsx';

class OrderFormDialog extends React.Component {

	render() {
		const {onClose, open} = this.props;
		return (
			<FullscreenDialog
				open={open}
				onClose={onClose}>
				<Products />
			</FullscreenDialog>
		);
	}
}

OrderFormDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
};

export default OrderFormDialog;