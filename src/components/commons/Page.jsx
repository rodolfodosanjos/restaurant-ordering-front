import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	pageStyle: {
		textAlign: 'center'
	}
};

const Page = ({classes, children}) => (
	<div className={classes.pageStyle}>
		{children}
	</div>
);

Page.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired
};

export default withStyles(styles)(Page);