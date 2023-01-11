import { useState } from "react";
import AddField from "./components/AddField";
import TodoItem from "./components/TodoItem";

const todosList = [
  { id: 123, title: "JavaScript", isComplite: false },
  { id: 213, title: "Vue", isComplite: true },
  { id: 321, title: "React", isComplite: false },
];

const App = () => {
  const [todos, setTodos] = useState(todosList);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isComplite = !current.isComplite;
    setTodos(copy);
  };

  const deleteTodo = (id) => {
    // const copy = [...todos];
    // copy.filter((t) => t.id != id);
    // setTodos(copy);
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
