import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
	pageHeadStyle: {
		fontWeight: 100,
		marginTop: 50,
		marginBottom: 50
	}
};

const PageTitle = ({classes, children}) => (
	<Typography
		className={classes.pageHeadStyle}
		variant="display3">
		{children}
	</Typography>
);

PageTitle.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.element.isRequired
	])
};

export default withStyles(styles)(PageTitle);