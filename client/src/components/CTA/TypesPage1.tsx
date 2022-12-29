import * as React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, useMediaQuery } from '@mui/material/';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export interface Icategory {
    label: string,
    bgColor: string
}

function TypesPage1(props: any) {

    const [currentIndex, setCurrentIndex] = React.useState(0)
    const medium = useMediaQuery("(max-width:899px)");
    const small = useMediaQuery("(max-width:599px)");
    const extraSmall = useMediaQuery("(max-width:280px)");
    console.log(props.labelCategory)
    return (
        <Grid
            container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "25px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "300px",
                    width: "100%"
                }}
            >
                {props.currentCategory.map((step: Icategory, index: number) => (
                    <Box key={index}
                        sx={{
                            display: currentIndex === index ? "flex" : "none",
                            backgroundColor: step.bgColor,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            position: "relative",
                            color: "#FFFF",
                            padding: "20px",
                            width: "100%"
                        }}
                    >
                        <KeyboardArrowLeft onClick={() => {
                            currentIndex === 0 ? setCurrentIndex(props.currentCategory.length - 1) : setCurrentIndex(c => c - 1)
                        }} sx={{ fontSize: 50, left: "5px", position: "absolute", cursor: "pointer" }} />
                        <Typography
                            sx={{
                                fontWeight: 'Bold',
                            }}
                        >
                            {step.label}
                        </Typography>
                        <KeyboardArrowRight
                            onClick={() => {
                                currentIndex === props.currentCategory.length - 1 ? setCurrentIndex(0) : setCurrentIndex(c => c + 1)
                            }}
                            sx={{ fontSize: 50, right: "5px", position: "absolute", cursor: "pointer" }} />
                    </Box>
                ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 3,
                }}
            >
                {props.labelCategory === "category1" ? <svg style={{ maxWidth: "300px", width: "100%" }} height="301" viewBox="0 0 598 601" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M97.7955 236.696L234.751 318.014L239.466 351.176L262.243 362.494V528.133L211.179 526.023L140.484 519.168L67.3721 506.605L34.5514 499.073L13.0312 488.312L20.0249 453.879L29.1712 417.294L50.1556 349.504L75.4407 283.865L97.7955 236.696Z" fill={props.currentCategory[currentIndex].label === "ENDOMORPH" ? props.currentCategory[currentIndex].bgColor : "white"} fill-opacity="0.5" />
                    <path d="M191.669 106.949C224.291 64.3408 285.904 17.0728 285.904 17.0728C285.904 17.0728 339.082 61.1158 385.401 116.935C431.72 172.755 446.191 210.203 446.191 210.203L313.359 288.818L285.904 273.456L259.142 288.818L117.273 203.877C117.273 203.877 157.074 146.545 191.669 106.949Z" fill={props.currentCategory[currentIndex].label === "MESOMORPH" ? props.currentCategory[currentIndex].bgColor : "white"} fill-opacity="0.5" />
                    <path d="M309.523 529.194L309.523 367.738L330.815 351.759L333.828 320.541L471.568 242.771L480.398 252.588L544.051 426.593L556.14 477.55L544.049 492.811L490.007 505.244L390.527 520.506L309.523 529.194Z" fill={props.currentCategory[currentIndex].label === "ECTOMORPH" ? props.currentCategory[currentIndex].bgColor : "white"} />
                    <path d="M322 286.75L450.546 211.644L465.711 240.17L336.803 312.387L334.998 295.777L322 286.75Z" fill={props.currentCategory[currentIndex].label === "HYBRID" ? props.currentCategory[currentIndex].bgColor : "white"} fill-opacity="0.5" />
                    <path d="M234.595 313.277L99.9848 237.706L116.729 209.187L249.012 286.597L235.488 296.92L234.595 313.277Z" fill={props.currentCategory[currentIndex].label === "HYBRID" ? props.currentCategory[currentIndex].bgColor : "white"} fill-opacity="0.5" />
                    <path d="M304.796 371.96L304.796 526.204L266.677 526.204L266.677 371.96L285.284 380.769L304.796 371.96Z" fill={props.currentCategory[currentIndex].label === "HYBRID" ? props.currentCategory[currentIndex].bgColor : "white"} fill-opacity="0.5" />
                    <path d="M282.883 539.769C282.883 532.269 282.883 532.269 282.882 532.269H282.876H282.848L282.732 532.268C282.629 532.268 282.472 532.268 282.263 532.267C282.067 532.267 281.825 532.266 281.539 532.264C281.217 532.263 280.837 532.261 280.403 532.258C278.766 532.247 276.35 532.226 273.251 532.183C267.052 532.097 258.121 531.925 247.217 531.582C225.4 530.894 195.724 529.519 164.249 526.772C132.743 524.023 99.5941 519.912 70.7773 513.787C44.342 508.167 22.4987 501.034 8.78708 492.306C50.2314 314.367 104.358 153.863 285.146 9.81177C464.018 155.101 514.621 327.401 556.665 470.555C558.708 477.51 560.73 484.396 562.746 491.207C559.912 492.306 556.078 493.729 551.247 495.381C539.374 499.443 521.479 504.895 497.604 510.359C449.857 521.287 378.172 532.269 282.883 532.269V539.769Z" stroke="black" stroke-width="15" />
                    <path d="M285.807 11.3232L285.807 273.27" stroke="black" stroke-width="15" />
                    <path d="M262.744 364.716L262.744 529.565" stroke="black" stroke-width="15" />
                    <path d="M309.422 361.275L309.422 530.472" stroke="black" stroke-width="15" />
                    <path d="M249.051 349.796L10.617 490.434" stroke="black" stroke-width="15" />
                    <path d="M475.807 239.144L333.41 319.633" stroke="black" stroke-width="15" />
                    <path d="M454.082 204.577L316.142 284.45" stroke="black" stroke-width="15" />
                    <path d="M557.791 486.431L326.095 351.131" stroke="black" stroke-width="15" />
                    <path d="M236.678 319.064L95.0297 239.479" stroke="black" stroke-width="15" />
                    <path d="M256.967 285.764L116.453 202.856" stroke="black" stroke-width="15" />
                    <path d="M241.808 296.752L286.974 270.676L332.14 296.752V348.906L286.974 374.982L241.808 348.906V296.752Z" fill="#4298B4" />
                    <path d="M241.808 296.752L286.974 270.676L332.14 296.752V348.906L286.974 374.982L241.808 348.906V296.752Z" fill={props.currentCategory[currentIndex].label === "CENTRAL" ? props.currentCategory[currentIndex].bgColor : "white"} />
                    <path d="M241.808 296.752L286.974 270.676L332.14 296.752V348.906L286.974 374.982L241.808 348.906V296.752Z" stroke="black" stroke-width="15" />
                </svg>
                    : <svg style={{ maxWidth: "300px", width: "100%" }} height="301" viewBox="0 0 592 613" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M90.8879 236.071L245.729 327.024L11.9316 466.946L25.0208 418.834L44.1889 349.805L90.8879 236.071Z" fill={props.currentCategory[currentIndex].label === "Mesomorphic Endomorph" ? props.currentCategory[currentIndex].bgColor : "white"} />
                        <path d="M245.087 329.411L246.907 350.567L264.164 361.057L188.437 408.897L144.961 435.686L101.924 460.278L25.0211 505.769L3.55273 493.206L11.8868 466.677L127.834 399.012L245.087 329.411Z" fill={props.currentCategory[currentIndex].label === "Balanced Endomorph" ? props.currentCategory[currentIndex].bgColor : "white"} />
                        <path d="M156.379 428.659L266.37 359.957V448.837V536.14L202.05 533.41L141.121 528.05L68.0093 519.312L25.0215 505.769L156.379 428.659Z" fill={props.currentCategory[currentIndex].label === "Ectomorphic Endomorph" ? props.currentCategory[currentIndex].bgColor : "white"} />
                        <path d="M305.432 20.7904L362.65 73.5526L415.217 138.322L457.389 204.05L372.374 255.119L305.432 293.649H305.433L305.432 20.7904Z" fill={props.currentCategory[currentIndex].label === "Ectomorphic Mesomorph" ? props.currentCategory[currentIndex].bgColor : "white"} />
                        <path d="M266.099 20.6616L286.304 3.15051L305.294 20.6616L304.823 292.828L286.816 282.024L266.098 294.975L266.098 170.784L266.099 20.6616Z" fill={props.currentCategory[currentIndex].label === "Balanced Mesomorph" ? props.currentCategory[currentIndex].bgColor : "white"} />
                        <path d="M186.176 98.5844L234.674 47.8953L266.099 17.8323V292.513L109.07 202.733L145.034 148.786L186.176 98.5844Z" fill={props.currentCategory[currentIndex].label === "Endomorphic Mesomorph" ? props.currentCategory[currentIndex].bgColor : "white"} />
                        <path d="M305.501 536.141L305.501 363.383L546.755 502.496L488.521 516.616L438.707 526.302L390.623 532.182L305.501 536.141Z" fill={props.currentCategory[currentIndex].label === "Endomorphic Ectomorph" ? props.currentCategory[currentIndex].bgColor : "white"} />
                        <path d="M546.755 502.496L305.501 363.383L325.41 351.214L325.41 329.436L346.935 340.822L560.924 465.553L568.518 494.113L546.755 502.496Z" fill={props.currentCategory[currentIndex].label === "Balanced Ectomorph" ? props.currentCategory[currentIndex].bgColor : "white"} />
                        <path d="M325.466 327.557L475.891 235.675L521.661 340.823L548.977 427.657L559.131 463.347L325.466 327.557Z" fill={props.currentCategory[currentIndex].label === "Mesomorphic Ectomorph" ? props.currentCategory[currentIndex].bgColor : "white"} />
                        <path d="M283.52 540.071C283.52 537.571 283.519 537.571 283.518 537.571H283.511H283.481L283.361 537.571L283.207 537.571C283.118 537.571 283.01 537.57 282.884 537.57C282.673 537.569 282.411 537.568 282.1 537.567C281.786 537.565 281.421 537.563 281.007 537.561C279.359 537.55 276.931 537.528 273.819 537.485C267.594 537.399 258.634 537.227 247.696 536.882C225.818 536.192 196.045 534.813 164.451 532.056C132.846 529.298 99.472 525.166 70.3743 518.98C42.0454 512.958 18.1313 505.06 3.77416 494.832C45.6536 314.129 100.048 150.35 285.811 3.70993C468.456 150.528 519.79 325.355 562.067 469.337C564.558 477.821 567.018 486.197 569.471 494.455C568.816 494.728 568 495.062 567.023 495.451C564.028 496.645 559.519 498.357 553.503 500.415C541.47 504.531 523.407 510.031 499.356 515.536C451.255 526.545 379.197 537.571 283.52 537.571V540.071Z" stroke="black" stroke-width="5" />
                        <path d="M266.65 18.5937L266.65 535.778" stroke="black" stroke-width="5" />
                        <path d="M304.787 18.5937L304.787 535.777" stroke="black" stroke-width="5" />
                        <path d="M459.547 203.237L8.74514 469.197" stroke="black" stroke-width="5" />
                        <path d="M475.264 237.964L26.3785 505.861" stroke="black" stroke-width="5" />
                        <path d="M546.097 502.095L92.13 236.815" stroke="black" stroke-width="5" />
                        <path d="M561.125 465.665L108.636 202.84" stroke="black" stroke-width="5" />
                        <path d="M241.808 296.752L286.974 270.676L332.14 296.752V348.906L286.974 374.982L241.808 348.906V296.752Z" fill={props.currentCategory[currentIndex].label === "Central" ? props.currentCategory[currentIndex].bgColor : "white"} />
                        <path d="M241.808 296.752L286.974 270.676L332.14 296.752V348.906L286.974 374.982L241.808 348.906V296.752Z" stroke="black" stroke-width="5" />
                        <path d="M322 286.75L450.546 211.644L465.711 240.17L336.803 312.387L334.998 295.777L322 286.75Z" fill={props.currentCategory[currentIndex].label === "Mesomorph Ectomorph" ? props.currentCategory[currentIndex].bgColor : "white"} />
                        <path d="M234.595 313.277L99.9848 237.706L116.729 209.187L249.012 286.597L235.488 296.92L234.595 313.277Z" fill={props.currentCategory[currentIndex].label === "Mesomorph Endomorph" ? props.currentCategory[currentIndex].bgColor : "white"} />
                        <path d="M304.796 371.96L304.796 526.204L266.677 526.204L266.677 371.96L285.284 380.769L304.796 371.96Z" fill={props.currentCategory[currentIndex].label === "Endomorph Ectomorph" ? props.currentCategory[currentIndex].bgColor : "white"} />

                    </svg>

                }
            </Box>
        </Grid >
    );
}

export default TypesPage1;