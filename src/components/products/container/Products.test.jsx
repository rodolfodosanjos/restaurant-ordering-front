import React from 'react';
import { shallow } from 'enzyme';
import Products from './Products.jsx';
import ProductsCardGrid from '../presentationals/ProductsCardGrid.jsx';
import ProductsList from '../presentationals/ProductsList.jsx';

const mockProducts = () => ([{
	_id: 123,
	name: 'Hamburguer com batata frita',
}, {
	_id: 321,
	name: 'Macarrão com camarão',
}]);

test('should render products card grid', () => {
	const mockedProducts = mockProducts();
	const products = shallow(<Products showProductsAsCards={true} />);
	expect(products.find(ProductsCardGrid)).toHaveLength(1);
	expect(products.find(ProductsList)).toHaveLength(0);
});

test('should render products list', () => {
	const mockedProducts = mockProducts();
	const products = shallow(<Products showProductsAsCards={false} />);
	expect(products.find(ProductsList)).toHaveLength(1);
	expect(products.find(ProductsCardGrid)).toHaveLength(0);
});