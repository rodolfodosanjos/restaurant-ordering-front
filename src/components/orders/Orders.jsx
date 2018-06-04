import { connect } from 'react-redux'
import { fetchOrders } from '../../actions/orders'
import OrdersList from '../orders/presentationals/OrdersList.jsx';

const mapStateToProps = ({orders}) => ({
	orders: orders.data,
	isFetching: orders.isFetching
});

const mapDispatchToProps = dispatch => {
	dispatch(fetchOrders());
};

const Orders = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrdersList);

export default Orders;