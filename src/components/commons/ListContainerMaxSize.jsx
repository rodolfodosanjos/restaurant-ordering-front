import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	listContainerMaxSize: {
		margin: '0 auto',
		maxWidth: 500
	},
	[theme.breakpoints.up('lg')]: {
		listContainerMaxSize: {
			maxWidth: 700
		}
	}
});

const ListContainerMaxSize = ({classes, children}) => (
	<div className={classes.listContainerMaxSize}>
		{children}
	</div>
);

ListContainerMaxSize.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired
};

export default withStyles(styles, {withTheme: true})(ListContainerMaxSize);