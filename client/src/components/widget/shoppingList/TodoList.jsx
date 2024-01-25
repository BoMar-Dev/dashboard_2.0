import { styles } from "../../../styles";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


export const TodoList = ( todos, setTodos ) => {

  
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo)=> {
      return todo !== text;
    });

    setTodos(newTodos)
  }



    return (

      <div >
       {todos?.length > 0 ? (
          <ul className={`${styles.regularTextStyle}`}>
            {todos.map((todo, index) => (
              <div className="flex justify-between" key={index}>
                
                <li className="flex ">
                  <GoDotFill className="mt-1 mr-1 text-red-400"  />
                  {todo}
                  </li>
                  <div>
                    <button className="w-10 mt-1 " onClick={()=>{deleteTodo(todo)}}><FaRegTrashAlt /></button>
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
  }