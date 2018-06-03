import React from 'react';
import { shallow } from 'enzyme';
import Products from './Products.jsx';
import ProductCard from './ProductCard.jsx';

const mockProducts = () => ([{
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
}]);

test.skip('check if all products were rendered', () => {
	const mockedProducts = mockProducts();
	const products = shallow(<Products />);
	expect(products).toContainReact(<ProductCard product={mockedProducts[0]}/>);
	expect(products).toContainReact(<ProductCard product={mockedProducts[1]}/>);
});