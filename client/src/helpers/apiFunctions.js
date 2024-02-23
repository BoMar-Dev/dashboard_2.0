
// GET - fetch all data 
export const fetchWorkoutsData = async (setCount) => {
    try {
      const response = await fetch("http://localhost:3001/api/challenge/");
      const workoutData = await response.json();
      console.log("Fetched workout data:", workoutData);
      
      // Map the fetched data to count state, ensuring values are within bounds
      setCount((prevState) => ({
        pushups: Math.min(
          Math.max(workoutData.find((item) => item.workout_name === "Armhävningar").count, 0),
          100
        ),
        squat: Math.min(
          Math.max(workoutData.find((item) => item.workout_name === "Benböj").count, 0),
          100
        ),
        situps: Math.min(
          Math.max(workoutData.find((item) => item.workout_name === "Sit-ups").count, 0),
          100
        ),
        lounges: Math.min(
          Math.max(workoutData.find((item) => item.workout_name === "Utfall").count, 0),
          100
        ),
        sitInSofa: Math.min(
          Math.max(workoutData.find((item) => item.workout_name === "Sitta i soffa").count, 0),
          100
        ),
      }));
    } catch (error) {
      console.error("Error fetching workout data:", error);
    }
  };
  


  // P U T - UPDATE -  that will run when OnClick next to the plus or minus function
  export const handleUpdate = async (workoutId, newCount, setCount) => {
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
  export const handleReset = async () => {
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