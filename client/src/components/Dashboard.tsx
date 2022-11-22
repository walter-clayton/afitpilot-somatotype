import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import { myform } from './Calculation';
import ResultsTable from './ResultsTable'
import { useNavigate } from "react-router-dom";
import { IAnthropometric, IData, ISomatotype } from '../App';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

const Dashboard = () => {

    //Somatotype values should come from backend (data saved from the landing page)
    const navigate = useNavigate();
    
    const [somatotype, setSomatotype]= useState<ISomatotype | undefined>(undefined);
    
    const [anthropometric, setAnthropometric] = useState<IAnthropometric | undefined>(undefined);


    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if(canvasRef.current?.style.width != null && 
            canvasRef.current?.style.height != null){
                canvasRef.current!.style.width = "100%";
                canvasRef.current!.style.height = `${canvasRef.current?.offsetWidth! * 1.17}px`;
        }
        
        const somatotypeInputs:IAnthropometric = {
            weight : anthropometric?.weight, 
            height : anthropometric?.height, 
            tricep_skinfold : anthropometric?.tricep_skinfold, 
            subscapular_skinfold : anthropometric?.subscapular_skinfold, 
            supraspinal_skinfold : anthropometric?.supraspinal_skinfold, 
            humerus_breadth : anthropometric?.humerus_breadth, 
            femur_breadth : anthropometric?.femur_breadth, 
            calf_girth : anthropometric?.calf_girth, 
            bicep_girth : anthropometric?.bicep_girth
        }
        
        const somatotypeResults = myform(somatotypeInputs, canvasRef.current?.offsetWidth, canvasRef.current?.offsetHeight, canvasRef.current);

        setSomatotype(somatotype => ({
            endomorphy: somatotypeResults[0],
            mesomorphy: somatotypeResults[1],
            ectomorphy: somatotypeResults[2],
        }));
        
        function handleResize() {
            if(canvasRef.current?.style.width !== undefined){
                canvasRef.current!.style.width = "100%";
                canvasRef.current!.style.height = `${canvasRef.current?.offsetWidth * 1.17}px`;

                const somatotypeInputs:IAnthropometric = {
                    weight : anthropometric?.weight, 
                    height : anthropometric?.height, 
                    tricep_skinfold : anthropometric?.tricep_skinfold, 
                    subscapular_skinfold : anthropometric?.subscapular_skinfold, 
                    supraspinal_skinfold : anthropometric?.supraspinal_skinfold, 
                    humerus_breadth : anthropometric?.humerus_breadth, 
                    femur_breadth : anthropometric?.femur_breadth, 
                    calf_girth : anthropometric?.calf_girth, 
                    bicep_girth : anthropometric?.bicep_girth
                }
                
                myform(somatotypeInputs, canvasRef.current?.offsetWidth, canvasRef.current?.offsetHeight, canvasRef.current);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    },[]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography variant="h3" gutterBottom m={3} textAlign='center'>
            Dashboard
            </Typography>
            <Grid container sx={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
                padding:'0px 15px'}}
                width={"100%"}
            >
                {/* Results Table */}
                <Grid
                    item
                    sx={{
                        flexGrow: 1,
                        alignItems: "center",
                        margin: "20px 0"}}
                        xs={12} md={8} lg={6}
                        width={"100%"}>
                    <ResultsTable endomorphy={somatotype?.endomorphy} mesomorphy={somatotype?.mesomorphy} ectomorphy={somatotype?.ectomorphy} showHistory={false}/>
                </Grid>
                {/* Graph */}
                <Grid
                item
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "20px 0"}}
                    xs={12} md={8} lg={6}
                    width={"100%"}>
                        <canvas id="somatotypeCanvas" style={{border: '1px solid black'}} width="0" height="0" ref={canvasRef}></canvas>
                </Grid>
                <Button
                    sx={{ margin: "10px 0" }}
                    variant="contained"
                    onClick={() => {
                        navigate("/Add");
                      }}
                >
                    Add new
                </Button>
            </Grid>
        </ThemeProvider>
    )
}

export default Dashboard