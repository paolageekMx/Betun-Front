import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function SignIn(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
      <Grid item xs>
          <Paper className={classes.paper}><TextField
                  id="username"
                  name="username"
                  label="Username"
                  className={classes.textField}
                  margin="dense"
                  onChange={this.handleChange("username")}
                />
          </Paper>
        </Grid>
        <Grid item xs>
        <Paper className = {classes.paper}>
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
        </Grid>
      </Grid>
    </div>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
