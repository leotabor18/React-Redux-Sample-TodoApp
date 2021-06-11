import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

const RemainingTodos = () => {
  const { todos } = useSelector((state) => state);
  return (
    <div>
      <Header header="Remaining Todos" />
      <p> {todos.todos.length} Items left</p>
    </div>
  );
};

export default RemainingTodos;
