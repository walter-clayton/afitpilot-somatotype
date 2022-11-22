import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { myform } from './Calculation';
import ResultsTable from './ResultsTable'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    // //Somatotype values should come from backend (data saved from the landing page)
    // const navigate = useNavigate();
    // const [height, setHeight] = useState(150);
    // const [bodyweight, setBodyweight] = useState(80);
    // const [tricep, setTricep] = useState(12);
    // const [subscapular, setSubscapular] = useState(12);
    // const [supraspinal, setSupraspinal] = useState(12);
    // const [humerus, setHumerus] = useState(7);
    // const [femur, setFemur] = useState(8);
    // const [calf, setCalf] = useState(38);
    // const [bicep, setBicep] = useState(38);

    // useEffect(() => {
    //     const somatotype = {
    //         bodyweight : bodyweight, 
    //         height : height, 
    //         tricep : tricep, 
    //         subscapular : subscapular, 
    //         supraspinal : supraspinal, 
    //         humerus : humerus, 
    //         femur : femur, 
    //         calf : calf, 
    //         bicep : bicep,
    //     }
    //     myform(somatotype);
    // });

    // const handleAddNewClick = () => {
    //     console.log('Go to add new page');
    // }

    return (
        <>
            {/* <Typography variant="h3" gutterBottom m={3} textAlign='center'>
            Dashboard
            </Typography>
            <Grid
                container
                maxWidth="sm"
                sx={{
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
            >
                <ResultsTable endomorphy={5} mesomorphy={4} ectomorphy={4}/>
                <Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: "30px" }}>
                        <canvas id="somatotypeCanvas" height="577.5" width="494" onLoad={myform}></canvas>
                    </Box>
                </Grid>
                <Button
                    sx={{ margin: "10px 0" }}
                    variant="contained"
                    onClick={() => {
                        handleAddNewClick();
                        navigate("/Add");
                      }}
                >
                    Add new
                </Button>
            </Grid> */}
        </>
    )
}

export default Dashboard