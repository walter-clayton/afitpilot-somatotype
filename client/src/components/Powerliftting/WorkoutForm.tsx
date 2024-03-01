import React, { useState } from "react";

interface WorkoutFormProps {
  onAddWorkout: (workout: Workout) => void;
}

interface Workout {
  prescribedLoad: number;
  intendedRPE: number;
  actualRPE: number;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({ onAddWorkout }) => {
  const [prescribedLoad, setPrescribedLoad] = useState<number | "">("");
  const [intendedRPE, setIntendedRPE] = useState<number | "">("");
  const [actualRPE, setActualRPE] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const workout: Workout = {
      prescribedLoad: Number(prescribedLoad),
      intendedRPE: Number(intendedRPE),
      actualRPE: Number(actualRPE),
    };
    onAddWorkout(workout);
    setPrescribedLoad("");
    setIntendedRPE("");
    setActualRPE("");
  };

  const renderRPEOptions = () => {
    return Array.from({ length: 10 }, (_, index) => index + 1).map(
      (rpeScore) => (
        <option key={rpeScore} value={String(rpeScore)}>
          {rpeScore}
        </option>
      )
    );
  };

  return (
    <form onSubmit={handleSubmit} className="workout">
      <label htmlFor="prescribedLoad">Prescribed Load (kg):</label>
      <input
        type="number"
        id="prescribedLoad"
        value={prescribedLoad}
        onChange={(e) => setPrescribedLoad(parseInt(e.target.value))}
        required
      />

      <label htmlFor="intendedRPE">Intended RPE:</label>
      <select
        id="intendedRPE"
        value={intendedRPE}
        onChange={(e) => setIntendedRPE(parseInt(e.target.value))}
        required
      >
        <option value="" disabled>
          Select RPE
        </option>
        {renderRPEOptions()}
      </select>

      <label htmlFor="actualRPE">Actual RPE:</label>
      <select
        id="actualRPE"
        value={actualRPE}
        onChange={(e) => setActualRPE(parseInt(e.target.value))}
        required
      >
        <option value="" disabled>
          Select RPE
        </option>
        {renderRPEOptions()}
      </select>

      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
