import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div className="mx-auto lg:w-2/5 h-10 bg-zinc-600 rounded-md p-2 mb-3">
      {todo.title}
    </div>
  );
};

export default TodoItem;
