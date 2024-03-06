import React, { useState, useEffect } from "react";
import axios from "axios";
import WorkoutForm from "./WorkoutForm";
import ChartContainer from "./ChartContainer";
import WorkoutTable from "./WorkoutTable";
import "./Powerlifting.css";

const API_URL: string = "http://localhost:3000/workouts";

interface Workout {
  _id: string;
  date: string;
  prescribedLoad: number;
  intendedRPE: number;
  actualRPE: number;
}

const Powerlifting: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [showTable, setShowTable] = useState<boolean>(false);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get(API_URL);
      const data: Workout[] = response.data;
      setWorkouts(data);
      setShowTable(data.length > 0); // Set showTable based on whether there is data
      console.log(data);
    } catch (error) {
      console.error("Error fetching workouts:", error);
    }
  };

  const addWorkout = async (workout: Omit<Workout, "_id">) => {
    try {
      const response = await axios.post(API_URL, workout);
      const data: Workout = response.data;
      setWorkouts([...workouts, data]);
      setShowTable(true); // Always show the table after adding a workout
    } catch (error) {
      console.error("Error adding workout:", error);
    }
  };

  const deleteWorkout = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setWorkouts(workouts.filter((workout) => workout._id !== id));
      setShowTable(workouts.length > 1); // Set showTable based on whether there is data after deleting
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  const editWorkout = async (editedWorkout: Workout) => {
    try {
      await axios.put(`${API_URL}/${editedWorkout._id}`, editedWorkout);
      setWorkouts((prevWorkouts) =>
        prevWorkouts.map((workout) =>
          workout._id === editedWorkout._id ? editedWorkout : workout
        )
      );
    } catch (error) {
      console.error("Error updating workout:", error);
    }
  };

  return (
    <div className="Powerlifting">
      <WorkoutForm onAddWorkout={addWorkout} showTable={showTable} />
      <ChartContainer key={workouts.length} workouts={workouts} />
      {showTable && workouts.length > 0 && (
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
