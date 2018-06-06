import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import CenteredItem from './CenteredItem.jsx';

const CenteredLoading = ({isLoading, children}) => (
	<div>{
		isLoading ?
			<CenteredItem>
				<CircularProgress/>
			</CenteredItem>
		:
		children
	}</div>
);

CenteredLoading.propTypes = {
	children: PropTypes.node.isRequired,
	isLoading: PropTypes.bool.isRequired
};

export default CenteredLoading;
