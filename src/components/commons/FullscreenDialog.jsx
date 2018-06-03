import React from 'react';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import CloseDialogButton from './CloseDialogButton.jsx';

const Transition = props => (
	<Slide direction="up" {...props} />
);

const FullscreenDialog = ({open, onClose, children}) => (
	<Dialog
		fullScreen
		open={open}
		onClose={onClose}
		transition={Transition}
	>
		<CloseDialogButton onClose={onClose}/>
		{children}
	</Dialog>
)

FullscreenDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
};

export default FullscreenDialog;
