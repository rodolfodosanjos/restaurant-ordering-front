import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
	pageMainButton: {
		position: 'fixed',
		bottom: (theme.spacing.unit * 5),
		right: (theme.spacing.unit * 5)
	}
});

const PageMainButton = ({classes, onClick, children, title}) => (
	<Tooltip id="tooltip-top" title={title} placement="top">
		<Button color="primary"
			onClick={onClick}
			className={classes.pageMainButton}
			variant="fab">
			{children}
		</Button>
	</Tooltip>
);

PageMainButton.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
};

export default withStyles(styles, {withTheme: true})(PageMainButton);