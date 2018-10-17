import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 340,
  },
  media: {
    height: 60,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/betun-back/public/images/favicon.ico"
          title="PAQUETE 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            PAQUETE 1
          </Typography>
          <Typography component="p">
            Paquete One Day - Te ayudamos en el día mas importante de tu vida
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comparte
        </Button>
        <Button size="small" color="primary">
          Leer Mas
        </Button>
      </CardActions>
    </Card>
    

    
    
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);