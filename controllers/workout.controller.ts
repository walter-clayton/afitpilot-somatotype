import { Request, Response } from "express";
import Workout from "../models/workout.model";

// Create new workout
export const createWorkout = async (req: Request, res: Response) => {
  try {
    const workout = new Workout(req.body);
    const savedWorkout = await workout.save();
    res.status(201).json(savedWorkout);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get all workouts
export const getWorkouts = async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get single workout by ID
export const getWorkoutById = async (req: Request, res: Response) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.status(200).json(workout);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update workout by ID
export const updateWorkout = async (req: Request, res: Response) => {
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.status(200).json(updatedWorkout);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete workout by ID
export const deleteWorkout = async (req: Request, res: Response) => {
  try {
    const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);
    if (!deletedWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.status(200).json({ message: "Workout deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
