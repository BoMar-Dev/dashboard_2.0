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

  useEffect(() => {
    const fetchWorkoutsData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/challange");
        const workoutData = await response.json();
        console.log("This is the workout data", workoutData);
        // Map the fetched data to count state
        /* prettier-ignore */
        setCount({
          pushups: workoutData.find((item) => item.workout_name === "Armhävningar")
          .count,
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
                    onClick={() => minus(workout.workout, count, setCount)}
                  >
                    <CiCircleMinus />
                  </button>
                  <p>{count[workout.workout]}</p>

                  <button
                    className="text-xl"
                    onClick={() => plus(workout.workout, count, setCount)}
                  >
                    {/* // the function inside functons.js for decrement/increment will have 3 parameters, what workout, the count, and the setcount. */}
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
              reset(setCount);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
