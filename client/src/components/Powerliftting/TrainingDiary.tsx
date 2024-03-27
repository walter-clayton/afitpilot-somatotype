import React, { useState } from "react";
import Header from "./Header";
import UsersInterface from "./UsersInterface";
import { Grid } from "@mui/material";
import { ExerciseFormState } from "./FormModal/UtilTypes";

const TrainingDiary: React.FC = () => {
  const [exercises, setExercises] = useState<ExerciseFormState[]>([]);

  // adding
  const addExercise = (newExercise: ExerciseFormState) => {
    setExercises([...exercises, newExercise]);
  };

  // updating
  // deleting

  return (
    <Grid container item>
      <Header addExercise={addExercise} />
      <UsersInterface exercises={exercises} addExercise={addExercise} />
    </Grid>
  );
};

export default TrainingDiary;
