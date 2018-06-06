import React from 'react';
import { shallow } from 'enzyme';
import ProductsDisplay from './ProductsDisplay.jsx';
import ProductsCardGrid from '../presentationals/ProductsCardGrid.jsx';
import ProductsList from '../presentationals/ProductsList.jsx';

describe('ProductsDisplay', () => {

	const mockProducts = () => ([{
		_id: 123,
		name: 'Hamburguer com batata frita',
	}, {
		_id: 321,
		name: 'Macarrão com camarão',
	}]);

	const voidFunction = () => {};

	test('should render products card grid', () => {
		const mockedProducts = mockProducts();
		const wrapper = shallow(
			<ProductsDisplay
				isLoading={false}
				orderToAddProducts={{}}
				products={[]}
				removeProductFromOrder={voidFunction}
				orderProduct={voidFunction}
				showProductsAsCards={true} />);
		expect(wrapper.find(ProductsCardGrid)).toHaveLength(1);
		expect(wrapper.find(ProductsList)).toHaveLength(0);
	});

	test('should render products list', () => {
		const mockedProducts = mockProducts();
		const wrapper = shallow(
			<ProductsDisplay
				isLoading={false}
				orderToAddProducts={{}}
				products={[]}
				removeProductFromOrder={voidFunction}
				orderProduct={voidFunction}
				showProductsAsCards={false} />);
		expect(wrapper.find(ProductsList)).toHaveLength(1);
		expect(wrapper.find(ProductsCardGrid)).toHaveLength(0);
	});

});