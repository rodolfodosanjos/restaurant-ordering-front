import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
	gridContainerFix: {
		width: 'initial'
	},
};

const ProductListItem = ({classes, product, orderToAddProducts, orderProduct}) => (
	<ListItem>
		<Avatar alt={product.name} src={product.imageSrc} />
		<ListItemText
			primary={product.name}
			secondary={product.description}
		/>
		<Grid container
			className={classes.gridContainerFix}
			alignItems="center"
			direction="column"
			justify="center">
			<Grid item>
				<Typography variant="headline">
					<small>R$</small> {product.price.toFixed(2)}
				</Typography>
			</Grid>
			<Grid item>
				{(orderToAddProducts && orderProduct) ?
					<Button
						variant="outlined"
						color="secondary"
						onClick={orderProduct.bind(undefined, orderToAddProducts, product)}>
						Add no Pedido
					</Button>
				: null}
				<Chip label={product.category} />
			</Grid>
		</Grid>
	</ListItem>
);

ProductListItem.propTypes = {
	classes: PropTypes.object.isRequired,
	orderProduct: PropTypes.func,
	product: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductListItem);