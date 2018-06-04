import { connect } from 'react-redux'
import { closeProductsToOrderDialog } from '../../actions/dialogs'
import ProductsToOrderDialog from './ProductsToOrderDialog'

const mapStateToProps = ({dialogs}) => ({
	isProductsToOrderDialogOpen: dialogs.isProductsToOrderDialogOpen,
	order: {
		_id: 123,
		table: 'Mesa 25',
		notes: 'Sem pepino',
		products: [{
			_id: 123,
			imageSrc: 'https://portal.minervafoods.com/files/styles/blog_full_page/public/como_fazer_hamburguer_caseiro.jpg?itok=CyGvXnuY',
			name: 'Hamburguer com batata frita',
			category: 'hamburguer',
			description: 'Hamburguer com queijo, carne e batata frita',
			price: 40
		}, {
			_id: 321,
			imageSrc: 'http://d2gtpjxvvd720b.cloudfront.net/system/newsletter_item/social_image/182/default_hungry-girl-healthy-spaghetti-squash-shrimp-scampi.jpg',
			name: 'Macarrão com camarão',
			category: 'massas',
			description: 'Espaguete com camarão',
			price: 45.4
		}]
	}
});

const mapDispatchToProps = dispatch => ({
	handleClose: () => {
		dispatch(closeProductsToOrderDialog())
	}
});

const ProductsToOrder = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsToOrderDialog);

export default ProductsToOrder;