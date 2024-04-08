import React, { useState } from "react";
import Header from "./Header";
import UsersInterface from "./UsersInterface";
import { Grid } from "@mui/material";
import { ExerciseFormState } from "./FormModal/UtilTypes";

const TrainingDiary: React.FC = () => {
  const [exercises, setExercises] = useState<ExerciseFormState[]>([]);
  console.log("list of exercises:", exercises);

  // adding
  const addExercise = (newExercise: ExerciseFormState) => {
    setExercises([...exercises, newExercise]);
  };

  // Function to delete an exercise by ID
  const deleteExercise = (exerciseId: string) => {
    const updatedExercises = exercises.filter(
      (exercise) => exercise.id !== exerciseId
    );
    setExercises(updatedExercises);
  };

  return (
    <Grid container item>
      <Header addExercise={addExercise} />
      <UsersInterface
        exercises={exercises}
        addExercise={addExercise}
        deleteExercise={deleteExercise}
      />
    </Grid>
  );
};

export default TrainingDiary;
