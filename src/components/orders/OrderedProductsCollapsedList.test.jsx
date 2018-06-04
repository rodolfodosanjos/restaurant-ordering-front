import React from 'react';
import { mount } from 'enzyme';
import OrderedProductsCollapsedList from './OrderedProductsCollapsedList.jsx';
import ProductsList from '../products/presentationals/ProductsList.jsx';
import ListItem from '@material-ui/core/ListItem';

const mockProducts = () => ([{
	_id: 123,
	imageSrc: 'https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_640.jpg',
	name: 'Hamburguer com batata frita',
	category: 'hamburguer',
	description: 'Hamburguer com queijo, carne e batata frita',
	price: 40
}]);

describe('OrderedProductsCollapsedList', () => {

	test('should NOT render products list when it mounts', () => {
		const mockedProducts = mockProducts();
		const orderedProductsCollapsedList = mount(<OrderedProductsCollapsedList products={mockedProducts} />);
		expect(orderedProductsCollapsedList.find(ProductsList)).toHaveLength(0);
	});

	test('should render products list when collapsed', () => {
		const mockedProducts = mockProducts();
		const orderedProductsCollapsedList = mount(<OrderedProductsCollapsedList products={mockedProducts} />);
		orderedProductsCollapsedList.find(ListItem).simulate('click');
		expect(orderedProductsCollapsedList.find(ProductsList)).toHaveLength(1);
	});

});