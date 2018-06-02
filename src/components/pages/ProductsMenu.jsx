import React from 'react';
import ProductCard from '../productsMenu/ProductCard.jsx';

export default () => (
  <div>
  	<ProductCard product={{
  		imageSrc: 'https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_640.jpg',
  		name: 'Hamburguer com batata frita',
  		category: 'hamburguer',
  		description: 'Hamburguer com queijo, carne e batata frita',
  		price: 40
  	}}/>
  </div>
);