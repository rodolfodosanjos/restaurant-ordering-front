import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
	centeredItem: {
		position: 'absolute',
		transform: "translate(-50%, -50%)",
		top: '50%',
		left: '50%'
	}
};

const CenteredItem = ({classes, children}) => (
	<div className={classes.centeredItem}>
		{children}
	</div>
);

CenteredItem.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredItem);
