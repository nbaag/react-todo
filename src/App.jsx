import { useState } from "react";
import TodoItem from "./components/TodoItem";

const todos = [
  { id: 123, title: "JavaScript", isComplite: false },
  { id: 213, title: "Vue", isComplite: false },
  { id: 321, title: "React", isComplite: false },
];

const App = () => {
  return (
    <div className="bg-zinc-700 py-5 h-screen text-zinc-50">
      <div className="w-11/12 mx-auto">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
