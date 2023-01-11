import { useState } from "react";

const AddField = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: new Date(),
        title,
        isComplite: false,
      },
      ...prev,
    ]);
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={(e) => e.key === "Enter" && addTodo(title)}
        className="flex mx-auto lg:w-2/5 h-9 bg-zinc-600 rounded-md p-3 mb-10 focus:outline-none"
        placeholder="Add a todo..."
      />
    </div>
  );
};

export default AddField;
