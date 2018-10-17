import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { newUser } from "../lib/authService";




const styles = theme => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const rol = [
  {
    value: "proveedor",
    label: "Proveedor"
  },
  {
    value: "organizador",
    label: "organizador"
  }
];

class Registrarse extends React.Component {
  state = {
    username: "",
    password: "",
    ap_paterno: "",
    ap_materno: "",
    mail: "",
    rol: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password, rol, nombre, ap_paterno, ap_materno, mail } = this.state;
    
    newUser(username, password, rol, nombre, ap_paterno, ap_materno, mail);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <Grid container spacing={24}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  className={classes.textField}
                  margin="dense"
                  onChange={this.handleChange("username")}
                />
              </Paper>
              <Paper className={classes.paper}>
                <TextField
                  id="password"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="dense"
                  onChange={this.handleChange("password")}
                />
              </Paper>
              <Paper className={classes.paper}>
                <TextField
                  id="nombre"
                  label="Nombre"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                  onChange={this.handleChange("nombre")}
                />
              </Paper>

              <Paper className={classes.paper}>
                <TextField
                  id="ap_paterno"
                  label="Apellido Paterno"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                  onChange={this.handleChange("ap_paterno")}
                />
              </Paper>
              <Paper className={classes.paper}>
                <TextField
                  id="ap_materno"
                  label="Apellido Materno"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                  onChange={this.handleChange("ap_materno")}
                />
              </Paper>
              <Paper className={classes.paper}>
                <TextField
                  id="mail"
                  label="Email"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                  onChange={this.handleChange("mail")}
                />
              </Paper>
              <Paper className={classes.paper}>
                <TextField
                  id="standard-select-currency"
                  select
                  label="Rol"
                  className={classNames(classes.textField, classes.dense)}
                  value={this.state.rol}
                  margin="dense"
                  onChange={this.handleChange("rol")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                >
                  {rol.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Paper>
              <button className="btn btn-primary" type="submit">
                Registrarse
              </button>
            </Grid>
          </Grid>
        </form>
        <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Tienes una Cuenta </Paper>
        </Grid>
        </Grid>
      </div>
    );
  }
}

Registrarse.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Registrarse);
