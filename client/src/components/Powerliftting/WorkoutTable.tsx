import React, { useState } from "react";
import { IoMdCreate as CiEdit } from "react-icons/io";
import { MdCancel, MdDelete, MdOutlineSaveAlt } from "react-icons/md";

interface Workout {
  _id: string; // Change type to string
  date: string;
  prescribedLoad: number;
  intendedRPE: number;
  actualRPE: number;
}

interface Props {
  workouts: Workout[];
  onDelete: (id: string) => void; // Change type of id to string
  onEdit: (workout: Workout) => void;
}

const WorkoutTable: React.FC<Props> = ({ workouts, onDelete, onEdit }) => {
  const [editedWorkout, setEditedWorkout] = useState<Workout | null>(null);

  const handleEdit = (workoutId: string) => {
    // Change type of workoutId to string
    const selectedWorkout = workouts.find(
      (workout) => workout._id === workoutId
    );
    if (selectedWorkout) {
      setEditedWorkout(selectedWorkout);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (editedWorkout) {
      setEditedWorkout({ ...editedWorkout, [name]: parseFloat(value) });
    }
  };

  const handleSave = () => {
    if (editedWorkout) {
      onEdit(editedWorkout);
      setEditedWorkout(null);
    }
  };

  const handleCancel = () => {
    setEditedWorkout(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Prescribed Load </th>
          <th>Intended RPE</th>
          <th>Actual RPE</th>
          <th>Note</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout) => (
          <tr key={workout._id}>
            <td>{workout.date}</td>
            <td>
              {editedWorkout && editedWorkout._id === workout._id ? (
                <input
                  type="number"
                  name="prescribedLoad"
                  value={editedWorkout.prescribedLoad}
                  onChange={handleChange}
                />
              ) : (
                workout.prescribedLoad + "kg"
              )}
            </td>
            <td>
              {editedWorkout && editedWorkout._id === workout._id ? (
                <select
                  name="intendedRPE"
                  value={editedWorkout.intendedRPE}
                  onChange={handleChange}
                >
                  {Array.from({ length: 10 }, (_, index) => index + 1).map(
                    (value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    )
                  )}
                </select>
              ) : (
                workout.intendedRPE
              )}
            </td>
            <td>
              {editedWorkout && editedWorkout._id === workout._id ? (
                <select
                  name="actualRPE"
                  value={editedWorkout.actualRPE}
                  onChange={handleChange}
                >
                  {Array.from({ length: 10 }, (_, index) => index + 1).map(
                    (value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    )
                  )}
                </select>
              ) : (
                workout.actualRPE
              )}
            </td>
            <td>
              {workout.intendedRPE - workout.actualRPE >= 5 && (
                <p style={{ fontSize: "15px" }}>
                  <strong> Notice your RPE score falling short? </strong>
                  <br />
                  Aim higher! Boost your intensity by 5 points and push for
                  better results. Keep striving for stronger gains and optimal
                  training outcomes
                </p>
              )}
            </td>
            <td>
              {editedWorkout && editedWorkout._id === workout._id ? (
                <>
                  <button className="icons" onClick={handleSave}>
                    <MdOutlineSaveAlt />
                  </button>
                  <button className="icons" onClick={handleCancel}>
                    <MdCancel />
                  </button>
                </>
              ) : (
                <button
                  className="icons"
                  onClick={() => handleEdit(workout._id)}
                >
                  <CiEdit />
                </button>
              )}
              <button className="icons" onClick={() => onDelete(workout._id)}>
                <MdDelete />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WorkoutTable;
