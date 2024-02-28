import { useEffect } from "react";
import { styles } from "../../../styles";

// React Icons
import { FaRegTrashAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

// Api functions
import { fetchtodo } from "../../../helpers/API/todoAPI";

export const TodoList = (todos, setTodos, newTodoList) => {
  // G E T all todos
  useEffect(() => {
    fetchtodo(setTodos);
  }, [setTodos]);

  // D E L E T E
  const handleDelete = async (todoId) => {
    try {
      // Send DELETE request to the server
      const response = await fetch(`http://localhost:3001/api/todo/${todoId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Update local state by filtering out the deleted todo
      setTodos((prevState) => prevState.filter((todo) => todo.id !== todoId));

      console.log("Todo deleted successfully.");
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div>
      {todos?.length > 0 ? (
        <ul className={`${styles.regularTextStyle}`}>
          {todos.map((todo, index) => (
            <div className="flex justify-between" key={index}>
              <li className="flex ">
                <GoDotFill className="mt-1 mr-1 text-red-400" />
                {todo.item}
              </li>
              <div>
                <button
                  className="w-10 mt-1 "
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div>
          <h4 className={`${styles.regularTextStyle}`}>Vi behöver inget..</h4>
        </div>
      )}
    </div>
  );
};
