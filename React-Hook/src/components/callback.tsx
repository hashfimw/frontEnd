import { useCallback, useState } from "react";
import Todos from "./todos";

function CallbackComp() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => setCount(count + 1);
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>Count : {count} </div>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CallbackComp;
