import React from 'react';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import CloseDialogButton from './CloseDialogButton.jsx';

const Transition = (props) => (
	<Slide direction="up" {...props} />
);

const FullscreenDialog = ({open, onClose, children, hideCloseButton}) => (
	<Dialog
		fullScreen
		open={open}
		onClose={onClose}
		TransitionComponent={Transition}
	>
		{ hideCloseButton ?
			null
			:
			<CloseDialogButton onClose={onClose}/>
		}
		{children}
	</Dialog>
)

FullscreenDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	hideCloseButton: PropTypes.bool
};

export default FullscreenDialog;
