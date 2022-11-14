import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import {Box,Button,Link} from '@mui/material/';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Grid} from '@mui/material/';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Modal from '@mui/material/Modal';

const theme = createTheme();

export default function Landing() {

//   const styles = (theme) => ({
//     root: {
//       backgroundColor: 'blue',
//       // Match [0, md)
//       //       [0, 900px)
//       [theme.breakpoints.up('md')]: {
//         backgroundColor: 'red',
//       },
//     },
//   });
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          alignItems:"center",
          // borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h5" color="inherit" noWrap>
            Somatotype
          </Typography>
        </Toolbar>
      </AppBar>
  


    <Box sx={{
      flexGrow: 1,
     display:"flex",
     flexDirection:'column',
     justifyContent:"center",
     alignItems:"center",
     minHeight:"450px",
 }} >
      <Grid >
      <Grid item xs={12} >
     <FormControl fullWidth sx={{ m: 1 }}   variant="filled">
     <FormHelperText id="filled-weight-helper-text" position="top">Height</FormHelperText>

<FilledInput
  id="filled-adornment-weight"
  placeholder='180'
  endAdornment={<InputAdornment position="end">cm</InputAdornment>}

/>
</FormControl>

     </Grid>
     <Grid item xs={12} md={8}>
     <FormControl  fullWidth sx={{ m: 1 }}  variant="filled">
     <FormHelperText id="filled-weight-helper-text" position="top">Bodyweight</FormHelperText>

<FilledInput
  id="filled-adornment-weight"
  endAdornment={<InputAdornment position="end">kg</InputAdornment>}
  aria-describedby="filled-weight-helper-text"
  placeholder='80'
/>
</FormControl>

     </Grid>     <Grid item xs={12} md={8} >
     <FormControl  fullWidth sx={{ m: 1 }}  variant="filled">
     <FormHelperText id="filled-weight-helper-text" position="top">Tricep skin fold </FormHelperText>

<FilledInput
  id="filled-adornment-weight"
  endAdornment={<InputAdornment position="end">mm</InputAdornment>}
  aria-describedby="filled-weight-helper-text"
  startAdornment={<InputAdornment position="start">12</InputAdornment>}
/>
</FormControl>

     </Grid>    
      <Grid item xs={12} md={8}>
     <FormControl  fullWidth sx={{ m: 1 }}  variant="filled">
     <FormHelperText id="filled-weight-helper-text" position="top">Subscapular skin fold</FormHelperText>

<FilledInput
  id="filled-adornment-weight"
  placeholder='12'
  endAdornment={<InputAdornment position="end">mm</InputAdornment>}
  aria-describedby="filled-weight-helper-text"
  label="With normal TextField"

/>
</FormControl>

     </Grid>
     <Grid item xs={12} md={8}>
     <FormControl  fullWidth sx={{ m: 1 }}  variant="filled">
     <FormHelperText id="filled-weight-helper-text" position="top">Supraspinal skin fold
            </FormHelperText>

            <FilledInput
              id="filled-adornment-weight"
              placeholder='12'
              endAdornment={<InputAdornment position="end">mm</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
            />
</FormControl>

     </Grid>
     <Grid item xs={12} md={8}>
     <FormControl  fullWidth sx={{ m: 1 }}  variant="filled">
     <FormHelperText id="filled-weight-helper-text" position="top">Humerus breadth
            </FormHelperText>

            <FilledInput
              id="filled-adornment-weight"
              placeholder='7'
              endAdornment={<InputAdornment position="end">cm</InputAdornment>}
              aria-describedby="filled-weight-helper-text"


            />
</FormControl>

     </Grid>
     <Grid item xs={12} md={8}>
     <FormControl  fullWidth sx={{ m: 1 }}  variant="filled">
     <FormHelperText id="filled-weight-helper-text" position="top">Femur breadth</FormHelperText>

<FilledInput
  id="filled-adornment-weight"
placeholder='8'
  endAdornment={<InputAdornment position="end">cm</InputAdornment>}
  aria-describedby="filled-weight-helper-text"

/>
</FormControl>

     </Grid>
     <Grid item xs={12} md={8}>
     <FormControl  fullWidth sx={{ m: 1 }}  variant="filled">
     <FormHelperText id="filled-weight-helper-text" position="top">Calf circumference</FormHelperText>

<FilledInput
  id="filled-adornment-weight"
  placeholder='38'
  endAdornment={<InputAdornment position="end">cm</InputAdornment>}
  aria-describedby="filled-weight-helper-text"


/>
</FormControl>

     </Grid>
     <Grid item xs={12} md={8}>
     <FormControl  fullWidth sx={{ m: 1 }}  variant="filled">
     <FormHelperText id="filled-weight-helper-text" position="top">Bicep circumference</FormHelperText>

<FilledInput
  id="filled-adornment-weight"
placeholder='38'
  endAdornment={<InputAdornment position="end">cm</InputAdornment>}
  aria-describedby="filled-weight-helper-text"
//   startAdornment={<InputAdornment position="start">38</InputAdornment>}


/>
</FormControl>

     </Grid>
     <Grid item xs={12} md={8}>
     <FormControl  fullWidth sx={{ m: 1 }}  variant="filled">
     <FormHelperText id="filled-weight-helper-text" position="top">Subscapular skin fold</FormHelperText>

<FilledInput
  id="filled-adornment-weight"
  placeholder='12'
  endAdornment={<InputAdornment position="end">mm</InputAdornment>}
  aria-describedby="filled-weight-helper-text"
  label="With normal TextField"

/>
</FormControl>

     </Grid>
     <Grid item xs={12} md={8}>
     <FormControl  fullWidth sx={{ m: 1 }}  variant="filled">
     <FormHelperText id="filled-weight-helper-text" position="top">Subscapular skin fold</FormHelperText>

<FilledInput
  id="filled-adornment-weight"
  placeholder='12'
  endAdornment={<InputAdornment position="end">mm</InputAdornment>}
  aria-describedby="filled-weight-helper-text"
  label="With normal TextField"

/>
</FormControl>

     </Grid>
     <Grid>
        <Link href="/Login" variant="body2"
                                textDecoration={'none'}

                            >
                            
                            </Link>
         
        </Grid>

<Box>
<Button  variant="contained" onClick={handleOpen}  color="grey">
Result</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
</Box>

      </Grid>
    </Box>

    </ThemeProvider>
  );
}