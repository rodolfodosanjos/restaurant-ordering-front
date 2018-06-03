import React from 'react';
import PropTypes from 'prop-types';
import OrderForm from '../orders/OrderForm.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';
import FullscreenDialog from '../commons/FullscreenDialog.jsx';

class OrderFormDialog extends React.Component {

	render() {
		const {orderToUpdate, onClose, open} = this.props;
		return (
			<FullscreenDialog
				open={open}
				onClose={onClose}
			>
				<Page>
					<PageTitle>
						{ orderToUpdate ?
							'Editar pedido'
							:
							'Criar pedido'
						}
					</PageTitle>
					<OrderForm orderToUpdate={orderToUpdate}/>
				</Page>
			</FullscreenDialog>
		);
	}
}

OrderFormDialog.propTypes = {
	orderToUpdate: PropTypes.object,
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
};

export default OrderFormDialog;