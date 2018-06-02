import React from 'react';
import { mount } from 'enzyme';
import ProductCard from './ProductCard.jsx';

const mockProduct = () => ({
	imageSrc: 'https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_640.jpg',
	name: 'Hamburguer com batata frita',
	category: 'hamburguer',
	description: 'Hamburguer com queijo, carne e batata frita',
	price: 40
});

test('check if product card renders all product info', () => {
	const mockedProduct = mockProduct();
	const productCard = mount(<ProductCard product={mockedProduct} />);
	expect(productCard.contains(mockedProduct.name)).toEqual(true);
	expect(productCard.contains(mockedProduct.category)).toEqual(true);
	expect(productCard.contains(mockedProduct.description)).toEqual(true);
	expect(productCard.contains(mockedProduct.price)).toEqual(true);
	expect(
		productCard.find('.MuiCardMedia-root-31')
		.prop('style')
		.backgroundImage
	).toContain(mockedProduct.imageSrc);
});