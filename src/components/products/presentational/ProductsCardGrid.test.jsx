import React from 'react';
import { shallow } from 'enzyme';
import ProductsCardGrid from './ProductsCardGrid.jsx';
import ProductCard from './ProductCard.jsx';

const mockProducts = () => ([{
	_id: 123,
	name: 'Hamburguer com batata frita',
}, {
	_id: 321,
	name: 'Macarrão com camarão',
}]);

test('check if all products were rendered', () => {
	const mockedProducts = mockProducts();
	const products = shallow(<ProductsCardGrid products={mockedProducts} />);
	expect(products.find(ProductCard)).toHaveLength(2);
});