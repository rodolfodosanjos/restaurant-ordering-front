import React, { Component } from 'react';
import ProductsCardGrid from '../presentational/ProductsCardGrid.jsx';
import ProductsList from '../presentational/ProductsList.jsx';

class Products extends Component {
	state = {
			products: [{
			_id: 123,
			imageSrc: 'https://portal.minervafoods.com/files/styles/blog_full_page/public/como_fazer_hamburguer_caseiro.jpg?itok=CyGvXnuY',
			name: 'Hamburguer com batata frita',
			category: 'hamburguer',
			description: 'Hamburguer com queijo, carne e batata frita',
			price: 40
		}, {
			_id: 321,
			imageSrc: 'http://d2gtpjxvvd720b.cloudfront.net/system/newsletter_item/social_image/182/default_hungry-girl-healthy-spaghetti-squash-shrimp-scampi.jpg',
			name: 'Macarrão com camarão',
			category: 'massas',
			description: 'Espaguete com camarão',
			price: 45.4
		}]
	}

  render() {
  	const {showProductsAsCards} = this.props;
  	const {products} = this.state;
	return (
		<div>
			{showProductsAsCards ?
				<ProductsCardGrid products={products} />
				:
				<ProductsList products={products} />
			}
		</div>
	);
  }
}

export default Products;
