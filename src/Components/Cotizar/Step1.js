import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
 
});



class Step1 extends React.Component {


  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
            require
            id="Nombre"
            label="Nombre Completo"
            placeholder="Nombre y Apellido"
            className={classes.textField}
            margin="dense"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
        />
        
        <TextField
             id="Email"
             label="Correo Electronico"
             placeholder="Email"
             className={classes.textField}
             margin="dense"
             variant="outlined"
             InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
        />
      </div>
    );
  }
}

Step1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Step1);