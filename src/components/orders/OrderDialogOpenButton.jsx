import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import OrderFormDialog from '../pages/OrderFormDialog.jsx';
import PageMainButton from '../commons/PageMainButton.jsx';

class OrderDialogOpenButton extends React.Component {
	state = { open: false };

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		return (
			<div>
				<PageMainButton
					title="Criar pedido"
					onClick={this.handleClickOpen}>
					<AddIcon />
				</PageMainButton>
				<OrderFormDialog 
					onClose={this.handleClose.bind(this)}
					open={this.state.open}/>
			</div>
		);
	}
}

export default OrderDialogOpenButton;