import React from "react";
import Header from "./Header";
import UsersInterface from "./UsersInterface";
import { Grid } from "@mui/material";

const TrainingDiary = () => {
  return (
    <Grid container item>
      <Header />
      <UsersInterface />
    </Grid>
  );
};

export default TrainingDiary;
