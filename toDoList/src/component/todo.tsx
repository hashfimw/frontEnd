import { ITodo } from "../types/todo";

interface Iprops {
  todos: ITodo[];
  handleDelete: (id: number) => void;
  handleDone: (id: number) => void;
}

function Todos({ todos, handleDelete, handleDone }: Iprops) {
  return (
    <div>
      {todos.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex min-w-[400px] justify-between items-center"
          >
            <input
              checked={item.isDone}
              type="checkbox"
              onChange={() => handleDone(item.id)}
            />
            <div>{item.desc}</div>
            <button
              onClick={() => handleDelete(item.id)}
              className="w-8 h-8 border border-blue-300 flex justify-center items-center rounded-md"
            >
              <i className="ri-delete-bin-6-fill text-lg"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
