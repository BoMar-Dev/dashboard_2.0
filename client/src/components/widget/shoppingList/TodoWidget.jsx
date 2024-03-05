import { useState } from "react";
import { styles } from "../../../styles";
import pen from "../../../assets/pen.svg";
import { GoPlusCircle } from "react-icons/go";

// Components inside the shoppingList folder that will render out all the items inside the todos
import { TodoList } from "./TodoList";

// API functions
import { handleNewTodo } from "../../../functions/API/todoAPI";

export default function WidgetOne() {
  const maxTodos = 8;

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const openAddTodoInput = (e) => {
    setShowAddTodoForm(true);
    e.preventDefault();
  };

  const closeAddTodoInput = (e) => {
    setShowAddTodoForm(false);
  };

  const handleInputChange = (e, setTodo) => {
    if (e.target.value !== "") {
      setTodo(e.target.value);
      console.log(e.target.value);
    } else {
      console.log("The input value is empty");
    }
  };

  return (
    <div>
      <div className="widget-wrapper w-[382px] h-[270px] bg-neutral-50 rounded-[20px] mt-2 p-6 px-12">
        <div className="flex  justify-between">
          <h3 className={`${styles.regularHeaderText} mt-2`}>Inköpslista</h3>
          <img
            className="cursor-pointer w-7 h-7"
            src={pen}
            onClick={openAddTodoInput}
          />
        </div>

        {showAddTodoForm && (
          <form className={`${styles.regularTextStyle}  z-[300px]`}>
            <input
              className="border w-[223px] mb-2 p-0.5"
              type="text"
              name="todo"
              placeholder="Vad behöver vi köpa . . . ."
              onChange={(e) => handleInputChange(e, setNewTodo)}
            />
            <button
              className={`${styles.regularTextStyle} bg-buttonGreen text-[17px] ml-6  rounded-full  `}
              onClick={() => {
                // Check if the length of todos is less than 8 before calling handleNewTodo
                if (todos.length < maxTodos) {
                  handleNewTodo(todos, setTodos, newTodo, closeAddTodoInput);
                } else {
                  console.log(
                    "Max Todo Item of 8 is reached. Your latest item/todo will not be added to the list"
                  );
                }
              }}
            >
              <GoPlusCircle className="bg-buttonGreen rounded-full" />
            </button>
          </form>
        )}
        {/* // rendering list structure from functions/helpers folder */}
        {TodoList(todos, setTodos)}
      </div>
    </div>
  );
}

// EXPLANATION OF LINE 55. WHY I HAVE TO DO IT AS AND NOT DIRECTLY INSIDE {handleNewTodo}
/*
 onClick Event Handler: This attribute specifies the function to run when the button is clicked. It expects a function.

 Arrow Function (() => {...}): This is an anonymous function declaration using arrow syntax. It's a concise way to define a function in JavaScript.

 handleNewTodo: This is the function that you want to execute when the button is clicked. However, instead of directly passing handleNewTodo, you wrap it inside the arrow function. This wrapping ensures that handleNewTodo is not executed immediately when the component renders, but rather when the button is clicked.

 Parameters: Inside the arrow function, you're passing parameters to handleNewTodo. These parameters (todos, setTodos, newTodo, closeAddTodoForm) are necessary for handleNewTodo to perform its task correctly. By passing them in this way, you're essentially creating a closure, ensuring that handleNewTodo has access to these variables when it's eventually called upon button click.

 So, when the button is clicked, the arrow function is executed, which in turn calls handleNewTodo with the provided parameters. This delayed execution (deferred until button click) is crucial for the expected behavior of your application */
