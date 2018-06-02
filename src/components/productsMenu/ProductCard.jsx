import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import blue from '@material-ui/core/colors/blue';

const styles = {
	card: {
		maxWidth: 250,
		textAlign: 'center'
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
	},
};

const ProductCard = ({classes, product}) => (
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
			<Typography component="p">
				{product.description}
			</Typography>
			<Chip label={product.category} />
			<Typography variant="headline">
				R$ {product.price}
			</Typography>
		</CardContent>
	</Card>
);

ProductCard.propTypes = {
	classes: PropTypes.object.isRequired,
	product: PropTypes.object.isRequired  
};

export default withStyles(styles)(ProductCard);