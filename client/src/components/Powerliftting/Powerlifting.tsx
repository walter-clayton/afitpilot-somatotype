import React, { useState, useEffect } from "react";
import WorkoutForm from "./WorkoutForm";
import ChartContainer from "./ChartContainer";
import WorkoutTable from "./WorkoutTable";
import "./Powerlifting.css";

interface Workout {
  id: number;
  date: string;
  prescribedLoad: number;
  intendedRPE: number;
  actualRPE: number;
}

const Powerlifting: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>(() => {
    const savedWorkouts = localStorage.getItem("workouts");
    return savedWorkouts ? JSON.parse(savedWorkouts) : [];
  });
  const [showTable, setShowTable] = useState<boolean>(workouts.length > 0);

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
    // Remove workouts from localStorage if the workouts array is empty
    if (workouts.length === 0) {
      localStorage.removeItem("workouts");
      setShowTable(false); // Set showTable to false if workouts array is empty
    }
  }, [workouts]);

  const addWorkout = (workout: Omit<Workout, "id">) => {
    const newWorkout = { ...workout, id: Date.now() };
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
    setShowTable(true); // Set showTable to true when a workout is added
  };

  const deleteWorkout = (id: number) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  const editWorkout = (editedWorkout: Workout) => {
    setWorkouts((prevWorkouts) =>
      prevWorkouts.map((workout) =>
        workout.id === editedWorkout.id ? editedWorkout : workout
      )
    );
    console.log(workouts);
  };

  return (
    <div className="Powerlifting">
      <WorkoutForm onAddWorkout={addWorkout} showTable={showTable} />
      <ChartContainer workouts={workouts} />
      {showTable && (
        <WorkoutTable
          workouts={workouts}
          onDelete={deleteWorkout}
          onEdit={editWorkout}
        />
      )}
    </div>
  );
};

export default Powerlifting;
