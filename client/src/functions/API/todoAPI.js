 // G E T - all todo items

 // Endpoint Variable
const todoEndpoint = "http://localhost:3001/api/todo/"

 export const fetchtodo = async (setTodos) => {
    try {
      const response = await fetch(todoEndpoint);
      const todoData = await response.json();
      console.log("Fetched TODO data:", todoData);
      setTodos(todoData);
    } catch (error) {
      console.error("Error fetching TODO data:", error);
    }
  };


 // P O S T -  new todo item
  export const handleNewTodo = async (todos, setNewTodo, newTodo, closeAddTodoInput) => {
  

    try {
      const response = await fetch(todoEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: newTodo }), // Sending item instead of todo
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
    
        setTodos([...todos, data.newTodo]);
        setNewTodo("");
        console.log("TODO added successfully");
        closeAddTodoInput();
      

    } catch (error) {
      console.log("Error:", error);
    }
  };

  // I still have my Delete function direct inside my component due to som unknown error : 
  // todoAPI.js:35 Error deleting todo: TypeError: setTodos is not a function
  //   at handleDelete (todoAPI.js:31:7)

  // The delete is still beeing executed, but the error message remains
