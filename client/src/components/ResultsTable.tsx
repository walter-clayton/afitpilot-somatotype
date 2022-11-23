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
import { Box, Button, Checkbox, ClickAwayListener, Grid, IconButton, Modal, Popper, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { display, flexbox, fontWeight } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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
    // return date.toDateString().split(' ').slice(1).join(' ');
    return date.toLocaleDateString([], {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });
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
    createRow(RoundResult(props.endomorphy).toFixed(1), RoundResult(props.mesomorphy).toFixed(1), RoundResult(props.ectomorphy).toFixed(1), getDate()),
    createRow(RoundResult(props.endomorphy).toFixed(1), RoundResult(props.mesomorphy).toFixed(1), RoundResult(props.ectomorphy).toFixed(1), getDate()),
    createRow(RoundResult(props.endomorphy).toFixed(1), RoundResult(props.mesomorphy).toFixed(1), RoundResult(props.ectomorphy).toFixed(1), getDate()),
    createRow(RoundResult(props.endomorphy).toFixed(1), RoundResult(props.mesomorphy).toFixed(1), RoundResult(props.ectomorphy).toFixed(1), getDate()),
    createRow(RoundResult(props.endomorphy).toFixed(1), RoundResult(props.mesomorphy).toFixed(1), RoundResult(props.ectomorphy).toFixed(1), getDate()),
  ];

  const handleEditResultsClick = () => {
    handleEditModalOpen();
    console.log("edit");
  }
  
  const handleDeleteResultsClick = () => {
    handleDeleteModalOpen();
    console.log("delete");
  }

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const row = event.target.parentElement?.parentElement?.parentElement;

    if(event.target.checked){
      row!.style.backgroundColor = "lightgrey";
    }
    else{
      row!.style.backgroundColor = "white";
    }
  }

  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditModalOpen = () => setOpenEditModal(true);
  const handleEditModalClose = () => setOpenEditModal(false);

  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const handleDeleteModalOpen = () => setOpenDeleteModal(true);
  const handleDeleteModalClose = () => setOpenDeleteModal(false);

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:  width < 400 ? '90%' : (width < 550 ? '80%' : (width < 1000 ? '50%' : '35%')),
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  let endoColumnTitle = (width >= 600 ? 'Endomorphy' : 'Endo');
  let mesoColumnTitle = (width >= 600 ? 'Mesomorphy' : 'Meso');
  let ectoColumnTitle = (width >= 600 ? 'Ectomorphy' : 'Ecto');

  let cellStyle = (width >= 600 ? 
    null
    :
    {padding:'6px 6px'}
  );

  let tableHeadContent = null;
  let tableBodyContent = null;
 
  if(props.showHistory){
    tableHeadContent =
    <TableRow hover={true}>
      <TableCell align="center" sx={cellStyle}>Show</TableCell>
      <TableCell align="center" sx={cellStyle}>Date</TableCell>
      <TableCell align="center" sx={cellStyle}>{endoColumnTitle}</TableCell>
      <TableCell align="center" sx={cellStyle}>{mesoColumnTitle}</TableCell>
      <TableCell align="center" sx={cellStyle}>{ectoColumnTitle}</TableCell>
      <TableCell align="center" sx={cellStyle}>Options</TableCell>
    </TableRow>;

    tableBodyContent =
    rows.map((row) => (
      <TableRow hover={true} key={rowKey}>
      <TableCell align="center" sx={cellStyle}>
        <Checkbox onChange={handleCheckBoxChange} aria-label='Somatotype selection checkbox' icon={<VisibilityOffIcon sx={{color:'#aaaaaa'}}/>} checkedIcon={<VisibilityIcon sx={{color:'#aaaaaa'}}/>}/>
      </TableCell>
      <TableCell align="center" sx={cellStyle}>{row.Date}</TableCell>
      <TableCell align="center" sx={cellStyle}>{row.Endomorphy}</TableCell>
      <TableCell align="center" sx={cellStyle}>{row.Mesomorphy}</TableCell>
      <TableCell align="center" sx={cellStyle}>{row.Ectomorphy}</TableCell>
      <TableCell align="center" sx={cellStyle}>
        <Grid container sx={{display:'flex', justifyContent:'center', alignContent:'center'}}>
          <div id='EditIconButtonWrapper' onClick={handleEditResultsClick}>
            <IconButton aria-label="edit" sx={{color:"#aaaaaa", padding: '0', "&:hover": { color: "black" }}}>
                <EditIcon sx={{fontSize:28}}/>
            </IconButton>
          </div>
          <div id='DeleteIconButtonWrapper' onClick={handleDeleteResultsClick}>
            <IconButton aria-label="delete" sx={{color:"#aaaaaa", padding: '0', "&:hover": { color: "black" }}}>
                <DeleteIcon sx={{fontSize:28}}/>
            </IconButton>
          </div>
        </Grid>
      </TableCell>
      </TableRow>
    ));
  }
  else{
    tableHeadContent =
    <TableRow hover={true}>
      <TableCell align="center" sx={cellStyle}>{endoColumnTitle}</TableCell>
      <TableCell align="center" sx={cellStyle}>{mesoColumnTitle}</TableCell>
      <TableCell align="center" sx={cellStyle}>{ectoColumnTitle}</TableCell>
    </TableRow>;

    tableBodyContent =
    rows.map((row) => (
      <TableRow hover={true} key={rowKey}>
      <TableCell align="center" sx={cellStyle}>{row.Endomorphy}</TableCell>
      <TableCell align="center" sx={cellStyle}>{row.Mesomorphy}</TableCell>
      <TableCell align="center" sx={cellStyle}>{row.Ectomorphy}</TableCell>
      </TableRow>
    ));
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
      <Modal
        open={openEditModal}
        onClose={handleEditModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-description" textAlign={'center'}>
            Do you want to
            <Typography fontWeight={'bold'} component={'span'}> edit </Typography> 
            this somatotype?
          </Typography>
          <Grid container display={'flex'} justifyContent={'center'} alignContent={'center'} spacing={2} sx={{ mt: 2 }}>
            <Grid item>
              <Button variant="outlined" color='error'>Cancel</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color='success'>Confirm</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={openDeleteModal}
        onClose={handleDeleteModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-description" textAlign={'center'}>
            Do you want to 
            <Typography fontWeight={'bold'} component={'span'}> delete </Typography>
            this somatotype?
          </Typography>
          <Grid container display={'flex'} justifyContent={'center'} alignContent={'center'} spacing={2} sx={{ mt: 2 }}>
            <Grid item>
              <Button variant="outlined" color='error'>Cancel</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color='success'>Confirm</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </TableContainer>
  );
}

export default ResultsTable
