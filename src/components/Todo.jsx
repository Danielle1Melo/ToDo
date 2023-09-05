import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p className="text">{todo.text}</p>
        <p className="category">{todo.category}</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          <DoneIcon className="doneImg"></DoneIcon>
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          <CloseIcon></CloseIcon>
        </button>
      </div>
    </div>
  );
};

export default Todo;
