import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard.jsx';

class ProductList extends Component {
	state = {
			products: [{
			_id: 123,
			imageSrc: 'https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_640.jpg',
			name: 'Hamburguer com batata frita',
			category: 'hamburguer',
			description: 'Hamburguer com queijo, carne e batata frita',
			price: 40
		}, {
			_id: 321,
			imageSrc: 'https://cdn.pixabay.com/photo/2015/03/05/18/30/spaghetti-660748_640.jpg',
			name: 'Macarrão com camarão',
			category: 'massas',
			description: 'Espaguete com camarão',
			price: 45.4
		}]
	}

  render() {
	return (
		<Grid container spacing={24}>
			{this.state.products.map(product => (
				<Grid item key={product._id}>
					<ProductCard product={product} />
				</Grid>
			))}
		</Grid>
	);
  }
}

export default ProductList;
