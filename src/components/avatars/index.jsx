import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
    root: {
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      backgroundColor: 'none',
      marginTop: '-10px',
      fontSize: '32px'
    },
    custom: {
      borderRadius: '50%',
      width: '25px',
      height: '25px',
      backgroundColor: '#7F8FA4',
      marginRight: '1rem'
    }
  }));


const Avatars = (props) => {
    const classes = useStyles();
    return (
               props.type ==='profile' ? <Avatar className={classes.root} alt={props.img} src={props.img} /> : 
               <Avatar className={classes.custom} alt={props.img} src={props.img} >vw</Avatar> 
              
    );
};

export default Avatars;