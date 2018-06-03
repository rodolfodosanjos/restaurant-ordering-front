import React from 'react';
import { mount, render, shallow } from 'enzyme';
import ProductListItem from './ProductListItem.jsx';

describe('ProductListItem', () => {

	const mockProduct = () => ({
		imageSrc: 'https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_640.jpg',
		name: 'Hamburguer com batata frita',
		category: 'hamburguer',
		description: 'Hamburguer com queijo, carne e batata frita',
		price: 40
	});
	const avatarSelector = '[class^="MuiAvatar"]';
	let mockedProduct;

	beforeAll(() => {
		mockedProduct = mockProduct();
	});

	test('should render main required product info ', () => {
		const productListItem = mount(<ProductListItem product={mockedProduct} />);
		expect(productListItem.contains(mockedProduct.name)).toEqual(true);
		expect(productListItem.contains(mockedProduct.category)).toEqual(true);
		expect(productListItem.contains(mockedProduct.price.toFixed(2))).toEqual(true);
	});

	test('should render product photo on avatar', () => {
		const productListItem = render(<ProductListItem product={mockedProduct} />);
		expect(productListItem.find(avatarSelector).html()).toContain(mockedProduct.imageSrc);
	});

});