import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const Transition = (props) => (
  <Slide direction="up" {...props} />
);

class OrderCreationButton extends React.Component {
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
				<Button
					variant="fab"
					mini
					onClick={this.handleClickOpen}
					aria-label="Criar pedido">
					<AddIcon />
				</Button>
				<Dialog
					fullScreen
					open={this.state.open}
					onClose={this.handleClose}
					TransitionComponent={Transition}
				>
					Criar pedido
				</Dialog>
			</div>
		);
	}
}

export default OrderCreationButton;