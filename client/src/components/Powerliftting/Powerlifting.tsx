import React, { useState } from "react";
import WorkoutForm from "./WorkoutForm";
import ChartContainer from "./ChartContainer";
import "./Powerlifting.css";

interface Workout {
  prescribedLoad: number;
  intendedRPE: number;
  actualRPE: number;
}

const Powerlifting: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  console.log(workouts);
  const addWorkout = (workout: Workout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
  };

  return (
    <div className="Powerlifting">
      <WorkoutForm onAddWorkout={addWorkout} />
      <ChartContainer workouts={workouts} />
    </div>
  );
};

export default Powerlifting;
