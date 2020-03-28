import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    "&:before": {
      // normal
      borderBottom: "1px solid transparent"
    },
    "&:after": {
      // focused
      borderBottom: `1px solid transparent`
    },
    "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
      // hover
      borderBottom: `1px solid transparent`
    }

  },
  alignSectiom: {
    display: 'flex'
  }
}));

export default function ControlledOpenSelect(props) {
  const {type} = props;
  const classes = useStyles();
  const [age, setAge] = React.useState(20);
  const [status, setStatus] = React.useState('pending');
  const [openStatus, setopenStatus] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleStatusChange = event => {
    setopenStatus(event.target.value);
  };

  const handleStatusClose = () => {
    setopenStatus(false);
  };

  const handleStatusOpen = () => {
    setopenStatus(true);
  };

  return (
    <div>
      {type === 'pages' &&
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          disableUnderline
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>}

      {type=== 'status' && 
            <FormControl className={classes.formControl}>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select2"
              open={openStatus}
              onClose={handleStatusClose}
              onOpen={handleStatusOpen}
              value={status}
              onChange={handleStatusChange}
              disableUnderline
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Pending'}>Pending</MenuItem>
              <MenuItem value={'Reconciled'}>Reconciled</MenuItem>
              <MenuItem value={'Un-Reconciled'}>Un-Reconciled</MenuItem>
              <MenuItem value={'Settled'}>Settled</MenuItem>
              <MenuItem value={'Un-Settled'}>Un-Settled</MenuItem>
            </Select>
          </FormControl>
      }

    </div>
  );
}