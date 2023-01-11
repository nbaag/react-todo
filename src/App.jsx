import { useState } from "react";
import AddField from "./components/AddField";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isComplite = !current.isComplite;
    setTodos(copy);
  };

  const deleteTodo = (id) => {
    setTodos([...todos].filter((t) => t.id != id));
  };

  return (
    <div className="bg-zinc-700 py-5 h-screen text-zinc-50">
      <div className="w-11/12 mx-auto">
        <AddField setTodos={setTodos} />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            chageTodo={changeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
