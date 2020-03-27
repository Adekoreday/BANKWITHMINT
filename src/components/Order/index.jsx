import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import './index.css';

const BorderLinearProgress = withStyles({
    root: {
      height: 5,
      backgroundColor: '#F5C343',
    },
    bar: {
      borderRadius: 2,
      backgroundColor: '#55AB68',
    },
  })(LinearProgress);

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(0),
      width: '100%',
    },
  }));

const Order = (props) => {
    const {pending, reconcilled, type} = props;
    const classes = useStyles();
    return (
        <div className='order'>
        <div className='title__order'>{type}</div>
        <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={reconcilled}
      />
      <div className='order__item'>Pending {type}: {pending}</div>
    <div className='order__item'>Reconciled {type}: {reconcilled}</div>
    <div className='order__item'>Total {type}: {pending + reconcilled}</div>
        </div>
    );
};

export default Order;