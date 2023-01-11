import React from "react";

const TodoItem = ({ todo, chageTodo, deleteTodo }) => {
  return (
    <div
      className="flex items-center mx-auto lg:w-2/5 h-10 bg-zinc-600 rounded-md p-2 mb-3
      hover:bg-zinc-500 ease-in-out duration-500 justify-between"
    >
      <div
        className={`${todo.isComplite ? "line-through" : ""} cursor-pointer`}
        onClick={() => chageTodo(todo.id)}
      >
        {todo.title}
      </div>
      <button onClick={() => deleteTodo(todo.id)}>x</button>
    </div>
  );
};

export default TodoItem;
