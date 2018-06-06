import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const styles = {
	card: {
		width: 200,
		textAlign: 'center'
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
	},
};

const ProductCard = ({classes, product, orderToAddProducts, orderProduct}) => (
	<Card className={classes.card}>
		<CardMedia
			className={classes.media}
			image={product.imageSrc}
			title={product.name}
		/>
		<CardContent>
			<Typography gutterBottom variant="title">
				{product.name}
			</Typography>
			<Typography gutterBottom component="p">
				{product.description}
			</Typography>
			<Chip label={product.category} />
			<Typography gutterBottom variant="headline">
				<small>R$</small> {product.price.toFixed(2)}
			</Typography>
			{(orderToAddProducts && orderProduct) ?
				<Button
					variant="outlined"
					color="secondary"
					onClick={orderProduct.bind(undefined, orderToAddProducts, product)}>
					Add no Pedido
				</Button>
			: null}
		</CardContent>
	</Card>
);

ProductCard.propTypes = {
	classes: PropTypes.object.isRequired,
	orderProduct: PropTypes.func.isRequired,
	product: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCard);