import { useState } from "react";
import { styles } from "../../../styles";
import pen from "../../../assets/pen.svg";
import { GoPlusCircle } from "react-icons/go";

// Components inside the shoppingList folder
import { TodoList } from "./TodoList";

// Helpers
import { addTodo } from "../../../helpers/functions";
import { handleChange } from "../../../helpers/functions";

export default function WidgetOne() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const MAX_TODOS = 8;

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(e, todo, todos, setTodo, setTodos, MAX_TODOS);
    closeAddTodoForm(e);
  };

  // Open input when clicking on pen icon
  const openAddTodo = (e) => {
    setShowAddTodoForm(true);
    e.preventDefault();
  };

  // closing input when + i clicked and todo is added to the state of all todos.
  const closeAddTodoForm = (e) => {
    setShowAddTodoForm(false);
    e.preventDefault();
  };

  return (
    <div>
      <div className="widget-wrapper w-[382px] h-[270px] bg-neutral-50 rounded-[20px] mt-2 p-6 px-12">
        <div className="flex  justify-between">
          <h3 className={`${styles.regularHeaderText} mt-2`}>Inköpslista</h3>
          <img
            className="cursor-pointer w-7 h-7"
            src={pen}
            onClick={openAddTodo}
          />
        </div>

        {showAddTodoForm && (
          <form className={`${styles.regularTextStyle}  z-[300px]`}>
            <input
              className="border w-[223px] mb-2 p-0.5"
              type="text"
              name="todo"
              placeholder="Vad behöver vi köpa . . . ."
              onChange={(e) => handleChange(e, setTodo)}
            />
            <button
              className={`${styles.regularTextStyle}bg-buttonGreen text-[17px] ml-6  rounded-full  `}
              onClick={handleAddTodo}
            >
              <GoPlusCircle className="bg-buttonGreen rounded-full" />
            </button>
          </form>
        )}

        {/* // rendering list structure from helper folder */}
        {TodoList(todos, setTodos)}
      </div>
    </div>
  );
}
