import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListIcon from '@material-ui/icons/List';
import blue from '@material-ui/core/colors/blue';
import CenteredItem from './CenteredItem.jsx';

const styles = {
	container: {
		textAlign: 'center',
		margin: 20,
		maxWidth: 200
	},
	title: {
		fontWeight: 300
	},
	icon: {
		margin: '-30px 0px',
		color: blue[300],
		fontSize: 200
	}
};

const EmptyListMessage = ({classes, list,
	emptyListTitle, emptyListText, children}) => (
	<CenteredItem>
		{(list && list.length > 0) ?
			children
			:
			<div className={classes.container}>
				<Typography
					className={classes.title}
					variant="headline">
					{emptyListTitle}
				</Typography>
				<ListIcon className={classes.icon} />
				<Typography
					variant="body2">
					{emptyListText}
				</Typography>
			</div>
		}
	</CenteredItem>
);

EmptyListMessage.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired
};

export default withStyles(styles)(EmptyListMessage);