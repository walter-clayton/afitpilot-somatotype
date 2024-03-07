import React, { useState } from "react";

interface WorkoutFormProps {
  onAddWorkout: (workout: Omit<Workout, "id">) => void;
  showTable: boolean;
}

interface Workout {
  id: number;
  date: string;
  prescribedLoad: number;
  intendedRPE: number;
  actualRPE: number;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({
  onAddWorkout,
  showTable,
}) => {
  const [prescribedLoad, setPrescribedLoad] = useState<number | "">("");
  const [intendedRPE, setIntendedRPE] = useState<number | "">("");
  const [actualRPE, setActualRPE] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString("en-GB");
    const workout: Omit<Workout, "id"> = {
      date: currentDate,
      prescribedLoad: Number(prescribedLoad),
      intendedRPE: Number(intendedRPE),
      actualRPE: Number(actualRPE),
    };
    onAddWorkout(workout);
    setPrescribedLoad("");
    setIntendedRPE("");
    setActualRPE("");
  };

  return (
    <form onSubmit={handleSubmit} className="workout">
      <label htmlFor="prescribedLoad">Prescribed Load (kg):</label>
      <input
        type="number"
        id="prescribedLoad"
        value={prescribedLoad}
        onChange={(e) => setPrescribedLoad(parseInt(e.target.value, 10))}
        required
      />

      <label htmlFor="intendedRPE">Intended RPE:</label>
      <select
        id="intendedRPE"
        value={intendedRPE}
        onChange={(e) => setIntendedRPE(parseInt(e.target.value, 10))}
        required
      >
        <option value="" disabled>
          Select RPE
        </option>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((rpeScore) => (
          <option key={rpeScore} value={String(rpeScore)}>
            {rpeScore}
          </option>
        ))}
      </select>

      <label htmlFor="actualRPE">Actual RPE:</label>
      <select
        id="actualRPE"
        value={actualRPE}
        onChange={(e) => setActualRPE(parseInt(e.target.value, 10))}
        required
      >
        <option value="" disabled>
          Select RPE
        </option>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((rpeScore) => (
          <option key={rpeScore} value={String(rpeScore)}>
            {rpeScore}
          </option>
        ))}
      </select>

      <button className="submit" type="submit">
        Add Workout
      </button>
    </form>
  );
};

export default WorkoutForm;
