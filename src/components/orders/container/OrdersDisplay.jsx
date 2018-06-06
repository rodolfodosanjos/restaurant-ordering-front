import { connect } from 'react-redux';
import { fetchOrders, deleteOrderRequest, selectOrderToEdit } from '../../../actions/orders';
import { openOrderSaveDialog } from '../../../actions/dialogs';
import OrdersList from '../presentationals/OrdersList.jsx';

const mapStateToProps = ({orders}) => ({
	orders: orders.data,
	isLoading: orders.isLoading
});

const mapDispatchToProps = dispatch => {
	dispatch(fetchOrders())
	
	return {
		removeOrder: _id => dispatch(deleteOrderRequest(_id))
								.then(() => dispatch(fetchOrders())),
		editOrder: order => {
			dispatch(selectOrderToEdit(order));
			dispatch(openOrderSaveDialog());
		}
	};
};

const Orders = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrdersList);

export default Orders;