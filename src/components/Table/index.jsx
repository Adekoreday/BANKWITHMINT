import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import data from './tableData';
import Status from '../status';
import Avatar from '../avatars';
import './index.css';

const AvatarImg = (props) => (
    <div className='avatar__name'>
        <Avatar img='vw'></Avatar>
        {props.name}
    </div>
)
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#EAEEF0',
    color: '#7F8FA4',
    fontSize: '14px',
    lineHeight: '19px',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
      backgroundColor: '#FFFFFF',
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

 const filteredArray = data.map((item, key) => ({
        name: <AvatarImg name={item.name}></AvatarImg>,
        price: `$${item.price}`,
        createdon: item.createdon,
        status: <Status status={item.status}></Status>
      }));

const useStyles = makeStyles({
  table: {
    minWidth: 960,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item type</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Transaction No</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredArray.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.createdon}</StyledTableCell>
              <StyledTableCell align="right">{row.createdon}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


  
