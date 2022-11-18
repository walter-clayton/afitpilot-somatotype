import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import Table from '@mui/material/Table';
import TableBody, { tableBodyClasses } from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

function createRow(Endomorphy: string, Mesomorphy: string, Ectomorphy: string, Date: string) {
  return { Endomorphy, Mesomorphy, Ectomorphy, Date };
}

function getDate(){
    const date = new Date();
    return date.toDateString().split(' ').slice(1).join(' ');
}

function handleEditResultsClick(){
    console.log("go to edit results page");
}

function handleDeleteResultsClick(){
  console.log("delete this result");
}

interface resultProps{
  endomorphy?:number
  mesomorphy?:number
  ectomorphy?:number
  showHistory?:boolean
}

const RoundResult = (result:number|undefined):number => {
  let roundedResult = 0;
  result !== undefined ? (roundedResult = Math.round(result * 10)/10) : (roundedResult = 0);
  return roundedResult;
}

const ResultsTable:FC<resultProps> = (props: any) => {
    const { height, width } = useWindowDimensions();

    const rowKey = 'key';

    const rows = [
      createRow(RoundResult(props.endomorphy).toFixed(1), RoundResult(props.mesomorphy).toFixed(1), RoundResult(props.ectomorphy).toFixed(1), getDate())
    ];

let tableHeadContent = null;
let tableBodyContent = null;
if(width >= 550){
  if(props.showHistory){
    tableHeadContent =
    <TableRow>
      <TableCell align="center">Endomorphy</TableCell>
      <TableCell align="center">Mesomorphy</TableCell>
      <TableCell align="center">Ectomorphy</TableCell>
      <TableCell align="center">Date</TableCell>
      <TableCell align="center">Edit</TableCell>
      <TableCell align="center">Delete</TableCell>
    </TableRow>;

    tableBodyContent =
    rows.map((row) => (
      <TableRow key={rowKey}>
      <TableCell align="center">{row.Endomorphy}</TableCell>
      <TableCell align="center">{row.Mesomorphy}</TableCell>
      <TableCell align="center">{row.Ectomorphy}</TableCell>
      <TableCell align="center">{row.Date}</TableCell>
      <TableCell align="center">
        <div id='EditIconButtonWrapper' onClick={handleEditResultsClick}>
            <IconButton aria-label="edit" disabled color="primary">
                <EditIcon sx={{ fontSize: 20 }}/>
            </IconButton>
        </div>
      </TableCell>
      <TableCell align="center">
        <div id='DeleteIconButtonWrapper' onClick={handleDeleteResultsClick}>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon sx={{ fontSize: 20 }}/>
            </IconButton>
        </div>
      </TableCell>
      </TableRow>
    ));
  }
  else{
    tableHeadContent =
    <TableRow>
      <TableCell align="center">Endomorphy</TableCell>
      <TableCell align="center">Mesomorphy</TableCell>
      <TableCell align="center">Ectomorphy</TableCell>
    </TableRow>;

    tableBodyContent =
    rows.map((row) => (
      <TableRow key={rowKey}>
      <TableCell align="center">{row.Endomorphy}</TableCell>
      <TableCell align="center">{row.Mesomorphy}</TableCell>
      <TableCell align="center">{row.Ectomorphy}</TableCell>
      </TableRow>
    ));
  }
}
else{
  if(props.showHistory){
    tableHeadContent =
    <TableRow>
      <TableCell align="center" sx={{padding:'6px 6px'}}>Endo-<br/>morphy</TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>Meso-<br/>morphy</TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>Ecto-<br/>morphy</TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>Date</TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>Edit</TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>Delete</TableCell>
    </TableRow>;

    tableBodyContent =
    rows.map((row) => (
      <TableRow key={rowKey}>
      <TableCell align="center" sx={{padding:'6px 6px'}}>{row.Endomorphy}</TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>{row.Mesomorphy}</TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>{row.Ectomorphy}</TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>{row.Date}</TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>
        <div id='EditIconButtonWrapper' onClick={handleEditResultsClick}>
            <IconButton aria-label="edit" disabled color="primary">
                <EditIcon sx={{ fontSize: 20 }}/>
            </IconButton>
        </div>
      </TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>
        <div id='DeleteIconButtonWrapper' onClick={handleDeleteResultsClick}>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon sx={{ fontSize: 20 }}/>
            </IconButton>
        </div>
      </TableCell>
      </TableRow>
    ));
  }
  else{
    tableHeadContent =
    <TableRow>
      <TableCell align="center" sx={{padding:'6px 6px'}}>Endo-<br/>morphy</TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>Meso-<br/>morphy</TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>Ecto-<br/>morphy</TableCell>
    </TableRow>;

    tableBodyContent =
    rows.map((row) => (
      <TableRow key={rowKey}>
      <TableCell align="center" sx={{padding:'6px 6px'}}>{row.Endomorphy}</TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>{row.Mesomorphy}</TableCell>
      <TableCell align="center" sx={{padding:'6px 6px'}}>{row.Ectomorphy}</TableCell>
      </TableRow>
    ));
  }
}

  return (
    <TableContainer component={Paper}>
      <Table aria-label="results table" size='small'>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={12} sx={{backgroundColor: 'black', color:'white'}}>
              RESULTS
            </TableCell>
          </TableRow>
          {tableHeadContent}
        </TableHead>
        <TableBody>
          {tableBodyContent}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ResultsTable
