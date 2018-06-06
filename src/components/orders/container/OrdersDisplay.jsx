import { connect } from 'react-redux'
import { fetchOrders, deleteOrderRequest } from '../../../actions/orders'
import OrdersList from '../presentationals/OrdersList.jsx';

const mapStateToProps = ({orders}) => ({
	orders: orders.data,
	isLoading: orders.isLoading
});

const mapDispatchToProps = dispatch => {
	dispatch(fetchOrders())
	
	return {
		removeOrder: _id => dispatch(deleteOrderRequest(_id))
								.then(() => dispatch(fetchOrders()))
	};
};

const Orders = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrdersList);

export default Orders;