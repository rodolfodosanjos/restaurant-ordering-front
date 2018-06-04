import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from './ProductsList.jsx';
import ProductListItem from './ProductListItem.jsx';

const mockProducts = () => ([{
	_id: 123,
	name: 'Hamburguer com batata frita',
}, {
	_id: 321,
	name: 'Macarrão com camarão',
}]);

test('check if all products were rendered', () => {
	const mockedProducts = mockProducts();
	const products = shallow(<ProductsList products={mockedProducts} />);
	expect(products.find(ProductListItem)).toHaveLength(2);
});