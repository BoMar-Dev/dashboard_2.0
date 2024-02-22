import { styles } from "../../../styles";
import { useState, useEffect } from "react";

//Icons
import pen from "../../../assets/pen.svg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";

// Incriment, decrement and reset button functions
import { reset } from "../../../helpers/functions";
import { plus } from "../../../helpers/functions";
import { minus } from "../../../helpers/functions";

// Workout info ( so I can map )
import { workouts } from "../../../helpers/workoutsData";

export default function ChallangeCounter() {
  const [count, setCount] = useState({
    pushups: 0,
    squat: 0,
    situps: 0,
    lounges: 0,
    sitInSofa: 0,
  });

  // G E T that will run as soon as the page reolde
  useEffect(() => {
    const fetchWorkoutsData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/challenge/");
        const workoutData = await response.json();
        console.log("Fetched workout data:", workoutData);
        // Map the fetched data to count state
        setCount({
          pushups: workoutData.find(
            (item) => item.workout_name === "Armhävningar"
          ).count,
          squat: workoutData.find((item) => item.workout_name === "Benböj")
            .count,
          situps: workoutData.find((item) => item.workout_name === "Sit-ups")
            .count,
          lounges: workoutData.find((item) => item.workout_name === "Utfall")
            .count,
          sitInSofa: workoutData.find(
            (item) => item.workout_name === "Sitta i soffa"
          ).count,
        });
      } catch (error) {
        console.error("Error fetching workout data:", error);
      }
    };

    fetchWorkoutsData();
  }, []);

  // P U T - UPDATE -  that will run when OnClick next to the plus or minus function
  const handleUpdate = async (workoutId, newCount) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/challenge/${workoutId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ count: newCount }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedWorkoutData = await response.json();
      console.log("Workout  successfully:", updatedWorkoutData);
      // Update local state with new count
      setCount((prevState) => ({
        ...prevState,
        [workoutId]: newCount,
      }));
    } catch (error) {
      console.error("Error updating workout data:", error);
    }
  };

  // POST - reset function ( setting count of all values in workouts to 0)
  const handleReset = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/challenge/reset`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedWorkoutData = await response.json();
      console.log("Workout RESET successfully:", updatedWorkoutData);
    } catch (error) {
      console.error("Error updating workout data:", error);
    }
  };

  return (
    <div>
      <div className="w-[382px] h-[270px] bg-neutral-50 rounded-[20px] mt-2 p-6 px-12">
        <div className="flex justify-between ">
          <h1 className={`${styles.regularHeaderText} mt-2`}>
            Veckans utmaning
          </h1>
          <img className="cursor- w-7 h-7 mt-1" src={pen} />
        </div>

        {workouts.map((workout, index) => {
          return (
            <ul key={index}>
              <li className={`${styles.regularTextStyle} mt-1 `}>
                <div className="flex justify-between mb-3 ">
                  <h4 className="w-[150px]">{workout.displayWorkoutName} </h4>

                  <button
                    className="text-xl"
                    onClick={() => {
                      minus(workout.workout, count, setCount);
                      handleUpdate(workout.id, count[workout.workout] - 1);
                    }}
                  >
                    <CiCircleMinus />
                  </button>
                  <p>{count[workout.workout]}</p>

                  <button
                    className="text-xl"
                    onClick={() => {
                      plus(workout.workout, count, setCount);
                      handleUpdate(workout.id, count[workout.workout] + 1);
                    }}
                  >
                    <IoIosAddCircleOutline />
                  </button>

                  <p>/ 100</p>
                </div>
              </li>
            </ul>
          );
        })}
        <div className="flex p-1 ml-[160px]">
          <button
            className={`${styles.regularTextStyle} bg-customPink hover:bg-customBlue text-white w-[75px] mt-0.5 px-2 rounded just`}
            onClick={() => {
              handleReset(reset(setCount));
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
