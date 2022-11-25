import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Container, Grid } from '@mui/material/';
import man from '../image/Group.svg'
import sitting from '../image/sitting-2.svg'
import CallToActionWidget from './CallToActionWidget';

export default function Types() {
    return (
        <Container >
            <Grid container sx={{ backgroundColor: '#f6f6f7', marginTop: 8 }} >
                <Grid xs={12} md={6} lg={6} sm={12}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <img src={sitting} alt="sitting girl" />
                    </Box>
                </Grid>
                <Grid xs={12} md={6} lg={6} sm={12} sx={{ backgroundColor: '#BF40BF' }}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h4" sx={{ color: 'white', textAlign: 'center' }}>
                            Balanced Endomorph
                        </Typography>
                        <Typography mt={1.5} component="h4" variant="h4">
                            Understand your body type
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ width: '100%', marginTop: 2 }}>
                <Typography variant="h2" gutterBottom>
                    Introduction
                </Typography>
                <Typography variant="h6" gutterBottom>
                    What is a Balanced endomorphy?
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sapiente? Exercitationem provident itaque nemo iusto consequatur laudantium deleniti? Impedit ad ab facere consequatur unde dolores modi soluta cupiditate veritatis provident?
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sapiente? Exercitationem provident itaque nemo iusto consequatur laudantium deleniti? Impedit ad ab facere consequatur unde dolores modi soluta cupiditate veritatis provident?
                </Typography>
                <Typography variant="h6" gutterBottom>
                    The Life of the Mind
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: "500px" }}>
                    <img src={man} alt="" height={"50%"} />
                </Box>
                <Typography mt={3} variant="body1" gutterBottom sx={{ marginTop: "-170px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sapiente? Exercitationem provident itaque nemo iusto consequatur laudantium deleniti? Impedit ad ab facere consequatur unde dolores modi soluta cupiditate veritatis provident?
                </Typography>
                <Box sx={{ backgroundColor: 'purple', padding: 2, color: "white", marginRight: "20px", marginLeft: "20px" }}>
                    <Typography variant="overline" >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </Typography>
                </Box>
                <Typography mt={3} variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sapiente? Exercitationem provident itaque nemo iusto consequatur laudantium deleniti? Impedit ad ab facere consequatur unde dolores modi soluta cupiditate veritatis provident?
                </Typography>
                <Typography variant="h6" gutterBottom>
                    A Thirst for Knowledge
                </Typography>
                <Typography mt={3} variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sapiente? Exercitationem provident itaque nemo iusto consequatur laudantium deleniti? Impedit ad ab facere consequatur unde dolores modi soluta cupiditate veritatis provident?
                </Typography>
            </Box>
            {/* widget component */}
            <CallToActionWidget />
        </Container>
    );
}