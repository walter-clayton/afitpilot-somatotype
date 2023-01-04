import React from 'react'
import { Grid, Box, Button, Typography, useMediaQuery } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';

const Library = (props) => {
    const navigate = useNavigate();
    const medium = useMediaQuery("(max-width:899px)");
    const small = useMediaQuery("(max-width:599px)");
    const extraSmall = useMediaQuery("(max-width:449px)");

    const Datas = [
        {
            images: "manu_man",
            bodytype: "Manu man",
            SomatotypeType: '2 - 7 - 2',
            TypeCode: 'BM'
        },
        {
            images: "eskimo woman",
            bodytype: "Eskimo woman",
            SomatotypeType: '6 - 4 - 1',
            TypeCode: 'MEn'
        },
        {
            images: "nilote man",
            bodytype: "Nilote man",
            SomatotypeType: '2 - 3 - 6',
            TypeCode: 'MEc'
        },
        {
            images: "brahmin man",
            bodytype: "Brahmin man",
            SomatotypeType: '2 - 4 - 4',
            TypeCode: 'EcM'
        },
        {
            images: "manu woman",
            bodytype: "Manu-woman",
            SomatotypeType: '2 - 5 - 2',
            TypeCode: 'BM'
        },
        {
            images: "eskimo woman",
            bodytype: "Eskimo man",
            SomatotypeType: '4 - 6 - 2',
            TypeCode: 'EnM'
        },
        {
            images: "manu_man",
            bodytype: "Manu man",
            SomatotypeType: '2 - 7 - 2',
            TypeCode: 'BM'
        },
        {
            images: "eskimo woman",
            bodytype: "Eskimo woman",
            SomatotypeType: '6 - 4 - 1',
            TypeCode: 'MEn'
        },
        {
            images: "nilote man",
            bodytype: "Nilote man",
            SomatotypeType: '2 - 3 - 6',
            TypeCode: 'MEc'
        },
        {
            images: "brahmin man",
            bodytype: "Brahmin man",
            SomatotypeType: '2 - 4 - 4',
            TypeCode: 'EcM'
        },
        {
            images: "manu woman",
            bodytype: "Manu-woman",
            SomatotypeType: '2 - 5 - 2',
            TypeCode: 'BM'
        },
        {
            images: "eskimo woman",
            bodytype: "Eskimo man",
            SomatotypeType: '4 - 6 - 2',
            TypeCode: 'EnM'
        },
    ]
    const imagePerCard = 6;
    const [next, setNext] = useState(imagePerCard);
    const handleMoreCard = () => {
        setNext(next + imagePerCard);
    };
    // console.log(next)
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    backgroundColor: "#F5F5F6",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "250px",
                }}
            >
                <Typography variant="h1"
                    sx={{
                        fontSize: medium
                            ? small
                                ? extraSmall
                                    ? "30px"
                                    : "36px"
                                : "54px"
                            : "54px",
                        color: "black",
                        textAlign: "center",
                        marginBottom: "20px",
                        lineHeight: "71px",
                        fontWeight: 600,
                    }}
                >
                    Library
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: "40px",
                        fontSize: "18px",
                        lineHeight: "30px",
                        backgroundColor: "RGB(108, 77, 123)",
                        padding: "14px 40px",
                        fontWeight: 600,
                        textAlign: "center",
                        textTransform: "initial",
                        marginTop: 0,
                        mb: -15,
                        "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
                    }}
                    onClick={() => {
                        navigate("/test");
                    }}
                >
                    Take the Test
                </Button>
            </Box>
            {/* number of other categories */}
            <Grid item xs={12} width={"100%"} mt={4}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                        <Typography variant="h1"
                            sx={{
                                color: "#33a474", textAlign: "center", fontSize: '54px', marginBottom: "20px", lineHeight: "71px", fontWeight: 600,
                            }}
                        >
                            30
                        </Typography>
                        <Typography sx={{ color: "black", textAlign: "center" }}>Other</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                        <Typography variant="h1"
                            sx={{
                                color: "#4298b4", textAlign: "center", fontSize: '54px', marginBottom: "20px", lineHeight: "71px", fontWeight: 600,
                            }}
                        >
                            10
                        </Typography>
                        <Typography sx={{ color: "black", textAlign: "center" }}>Sports</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                        <Typography variant="h1"
                            sx={{
                                color: "#e4ae3a", textAlign: "center", fontSize: '54px', marginBottom: "20px", lineHeight: "71px", fontWeight: 600,
                            }}
                        >
                            20
                        </Typography>
                        <Typography sx={{ color: "black", textAlign: "center", }}>Tribesman
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/* compare table */}

            {/* card */}
            <Grid
                container
                spacing={2}
                sx={{
                    margin: "0 auto",
                }}
                alignItems={'center'}
                direction={{ xs: "column", sm: "row", md: "row", lg: "row", xl: "row" }}
            >
                {Datas?.slice(0, next)?.map((step, index) => {
                    return (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={4}
                            xl={4}
                            sx={{ textAlign: "center", marginTop: 5, mb: 5, }}
                        >
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    sx={{ objectFit: "fill" }}
                                    image={require("../image/" + step.images + ".svg")}
                                />
                                <Typography variant="h5" component="div"
                                    sx={{
                                        backgroundColor: "#D9D9D9"
                                    }}
                                >{step.bodytype}
                                </Typography>
                                <Typography variant="h5" component="div"
                                    sx={{
                                        backgroundColor: "#E7E7E7"
                                    }}
                                >
                                    {step.SomatotypeType}
                                </Typography>
                                <Typography variant="h6" component="div"
                                    sx={{
                                        backgroundColor: "#F5F5F6"
                                    }}
                                >
                                    {step.TypeCode}
                                </Typography>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
            {/* button */}
            {next < Datas?.length && (
                < Button
                    variant="contained"
                    sx={{
                        borderRadius: "40px",
                        fontSize: "18px",
                        lineHeight: "30px",
                        backgroundColor: "RGB(108, 77, 123)",
                        padding: "14px 40px",
                        fontWeight: 600,
                        textAlign: "center",
                        textTransform: "initial",
                        marginTop: 0,
                        mb: 2,
                        "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
                    }}
                    onClick={handleMoreCard}
                >
                    Load More
                </Button>
            )
            }
        </Box >

    )
}

export default Library
