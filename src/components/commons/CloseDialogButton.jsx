import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  closeDialogButton: {
    position: 'absolute',
    top: (theme.spacing.unit * 5),
    right: (theme.spacing.unit * 5),
    zIndex: 100
  }
});

const CloseDialogButton = ({classes, onClose}) => (
  <Button mini onClick={onClose} className={classes.closeDialogButton}>
    <CloseIcon/>
  </Button>
);

CloseDialogButton.propTypes = {
	classes: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired
};

export default withStyles(styles, {withTheme: true})(CloseDialogButton);