import React from 'react';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 1
  },
  customBadge: {
    backgroundColor: "#1875F0",
    color: "white",

  }
});

const Badges = (props) => {
  const { classes } = props;
    return (
        <div className={classes.root}>
        <Badge 
        classes={{ badge: classes.customBadge }}
        className={classes.margin}
        badgeContent={8}
       >
          <NotificationsNoneIcon style={{ fontSize: 16 }}/>
        </Badge>
        </div>
    );
};

export default withStyles(styles)(Badges);