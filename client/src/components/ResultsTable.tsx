import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
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

function createRow(Endomorphy: number, Mesomorphy: number, Ectomorphy: number, Date: string) {
  return { Endomorphy, Mesomorphy, Ectomorphy, Date };
}

function getDate(){
    const date = new Date();
    return date.toDateString().split(' ').slice(1).join(' ');
}

function handleEditResultsClick(){
    console.log("go to edit results page");
}

interface resultProps{
  endomorphy?:number
  mesomorphy?:number
  ectomorphy?:number
}

const ResultsTable:FC<resultProps> = (props: any) => {
    const { height, width } = useWindowDimensions();

    const rowKey = 'key';

    const rows = [
      createRow(props.endomorphy, props.mesomorphy, props.ectomorphy, getDate())
    ];

  return (
    <TableContainer component={Paper} sx={{margin:'20px 0px'}}>
      <Table aria-label="results table" size='small'>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={12} sx={{backgroundColor: 'black', color:'white'}}>
              RESULTS
            </TableCell>
          </TableRow>
            {width >= 500 ?
                <TableRow>
                    <TableCell align="center">Endomorphy</TableCell>
                    <TableCell align="center">Mesomorphy</TableCell>
                    <TableCell align="center">Ectomorphy</TableCell>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center"></TableCell>
                </TableRow>
                : 
                <TableRow>
                    <TableCell align="center" sx={{padding:'6px 6px'}}>Endo-<br/>morphy</TableCell>
                    <TableCell align="center" sx={{padding:'6px 6px'}}>Meso-<br/>morphy</TableCell>
                    <TableCell align="center" sx={{padding:'6px 6px'}}>Ecto-<br/>morphy</TableCell>
                    <TableCell align="center" sx={{padding:'6px 6px'}}>Date</TableCell>
                    <TableCell align="center" sx={{padding:'6px 6px'}}></TableCell>
                </TableRow>
            }
        </TableHead>
        <TableBody>
            {width >= 500 ?
            rows.map((row) => (
                    <TableRow key={rowKey}>
                    <TableCell align="center">{row.Endomorphy}</TableCell>
                    <TableCell align="center">{row.Mesomorphy}</TableCell>
                    <TableCell align="center">{row.Ectomorphy}</TableCell>
                    <TableCell align="center">{row.Date}</TableCell>
                        <TableCell align="center">
                        <div id='EditIconButtonWrapper' onClick={handleEditResultsClick}>
                            <IconButton aria-label="delete" disabled color="primary">
                                <EditIcon sx={{ fontSize: 20 }}/>
                            </IconButton>
                        </div>
                        </TableCell>
                    </TableRow>
                ))
                :
                rows.map((row) => (
                    <TableRow key={rowKey}>
                    <TableCell align="center" sx={{padding:'6px 6px'}}>{row.Endomorphy}</TableCell>
                    <TableCell align="center" sx={{padding:'6px 6px'}}>{row.Mesomorphy}</TableCell>
                    <TableCell align="center" sx={{padding:'6px 6px'}}>{row.Ectomorphy}</TableCell>
                    <TableCell align="center" sx={{padding:'6px 6px'}}>{row.Date}</TableCell>
                        <TableCell align="center" sx={{padding:'6px 6px'}}>
                            <div id='EditIconButtonWrapper' onClick={handleEditResultsClick}>
                                <IconButton aria-label="delete" disabled color="primary">
                                    <EditIcon sx={{ fontSize: 20 }}/>
                                </IconButton>
                            </div>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ResultsTable
