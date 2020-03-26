import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const RADIUS = 10;

const useStyles = makeStyles( (theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: '10px',
      },  
    },
    content: {
      marginRight: '0px',
      width: '2px',
      minWidth: '5px',
      maxWidth: '7px',
    },
  }),
);

const Badges = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Badge 
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        badgeContent={8} color="primary">
          <NotificationsNoneIcon />
        </Badge>
        </div>
    );
};

export default Badges;