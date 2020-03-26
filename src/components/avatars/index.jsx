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
    }
  }));


const Avatars = () => {
    const classes = useStyles();
    return (
             <Avatar className={classes.root} alt="Remy Sharp" src="https://res.cloudinary.com/kaytronics/image/upload/ar_1:1,b_rgb:315387,bo_5px_solid_rgb:ffffff,c_fill,g_auto,q_21,r_max,w_1000/v1585249324/IMG_20191227_110232_357-removebg-preview_copy_oede60.png" />
    );
};

export default Avatars;