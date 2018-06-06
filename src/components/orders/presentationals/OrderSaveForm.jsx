import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class OrderSaveForm extends React.Component {
	state = this.props.orderToEdit || {}; 

	handleInputChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	}

	saveOrder(event) {
		event.preventDefault();
		const {_id, table, notes} = this.state;
		const {updateOrder, createOrder} = this.props;

		if (_id)
			return updateOrder({
				_id,
				table,
				notes
			});
		createOrder({
			table,
			notes
		});
	}

	render() {
		return (
			<form onSubmit={this.saveOrder.bind(this)} validate="true" autoComplete="off">
				<Grid
					container
					direction="column"
					justify="center"
					alignItems="center"
					spacing={0}>
					<Grid item>
						<TextField
							id="table"
							label="Mesa"
							inputProps={{ autoFocus: true }}
							defaultValue={this.state.table}
							onChange={this.handleInputChange('table')}
							margin="normal"
							required
						/>
					</Grid>
					<Grid item>
						<TextField
							id="notes"
							label="Observações"
							defaultValue={this.state.notes}
							onChange={this.handleInputChange('notes')}
							margin="normal"
						/>
					</Grid>
					<Grid item>
						<br/>
						<br/>
						<Button type="submit" variant="raised" color="primary">
							Salvar
						</Button>
					</Grid>
				</Grid>
			</form>
		);
	}
}

OrderSaveForm.propTypes = {
	createOrder: PropTypes.func.isRequired,
	updateOrder: PropTypes.func.isRequired
};

export default OrderSaveForm;