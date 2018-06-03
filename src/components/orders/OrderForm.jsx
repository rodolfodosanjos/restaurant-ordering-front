import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class OrderForm extends React.Component {
	state = this.props.orderToUpdate || {}; 

	handleInputChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	}

	async saveOrder(event) {
		event.preventDefault();
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

export default OrderForm;