import { useEffect, useRef, useState } from "react";
import "./styles.css";
import Todos from "./component/todo";
import { ITodo } from "./types/todo";

function App() {
  const [todo, setTodo] = useState<ITodo[]>([
    { id: 1, desc: "Coding", isDone: false },
    { id: 2, desc: "Eat", isDone: false },
    { id: 3, desc: "Sleep", isDone: false },
    { id: 4, desc: "Repeat", isDone: false },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAdd = () => {
    if (inputRef.current) {
      if (inputRef.current.value == "")
        return alert("input tidak boleh kosong");

      const newTodo: ITodo = {
        id: todo.length ? Math.max(...todo.map((item) => item.id)) + 1 : 1,
        desc: inputRef.current.value,
        isDone: false,
      };
      setTodo((t) => [...t, newTodo]);
      inputRef.current.value = "";
    }
  };
  const handleDelete = (id: number) => {
    const newArr = todo.filter((item) => item.id !== id);
    setTodo(newArr);
  };

  const handleDone = (id: number) => {
    const newArr = todo.map((item) => {
      if (item.id == id) {
        return { ...item, isDone: !item.isDone };
      }
      return { ...item };
    });
    setTodo(newArr);
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-[60px] font-bold text-sky-300">
        To <span className="text-slate-600">Do</span> List
      </h1>
      <Todos todos={todo} handleDelete={handleDelete} handleDone={handleDone} />
      <div className="flex mt-10 min-w-[480px] gap-4">
        <input
          ref={inputRef}
          className="w-full border-2 border-blue-300 rounded-md p-2"
          type="text"
          placeholder="add to do list"
        />
        <button onClick={handleAdd} className="bg-sky-300 p-2 rounded-lg">
          Add
        </button>
      </div>
      <p className="font-medium text-xl mt-5">
        DONE : {todo.filter((item) => item.isDone == true).length}
      </p>
    </div>
  );
}

export default App;
