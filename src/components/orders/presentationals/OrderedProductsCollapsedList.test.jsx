import React from 'react';
import { mount } from 'enzyme';
import OrderedProductsCollapsedList from './OrderedProductsCollapsedList.jsx';
import ProductsList from '../../products/presentationals/ProductsList.jsx';
import ListItem from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const mockProducts = () => ([{
	_id: 123,
	imageSrc: 'https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_640.jpg',
	name: 'Hamburguer com batata frita',
	category: 'hamburguer',
	description: 'Hamburguer com queijo, carne e batata frita',
	price: 40
}]);

describe('OrderedProductsCollapsedList', () => {

	const voidFunction = () => {};

	test('should NOT render products list when it mounts', () => {
		const mockedProducts = mockProducts();
		const orderedProductsCollapsedList = mount(
			<OrderedProductsCollapsedList
				order={{}}
				removeProductFromOrder={voidFunction}
				products={mockedProducts} />);
		expect(orderedProductsCollapsedList.find(ProductsList)).toHaveLength(0);
		expect(orderedProductsCollapsedList.find(ExpandMore)).toHaveLength(1);
	});

	test('should render products list when collapsed', () => {
		const mockedProducts = mockProducts();
		const orderedProductsCollapsedList = mount(
			<OrderedProductsCollapsedList
				order={{}}
				removeProductFromOrder={voidFunction}
				products={mockedProducts} />);
		orderedProductsCollapsedList.find(ListItem).simulate('click');
		expect(orderedProductsCollapsedList.find(ProductsList)).toHaveLength(1);
		expect(orderedProductsCollapsedList.find(ExpandLess)).toHaveLength(1);
	});

});