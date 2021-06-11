import React from "react";
import { Container } from "react-bootstrap";
import Input from "./components/Input";
import "./App.css";
import TodoLists from "./components/TodoLists";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

const App = () => {
  const { todos, filter } = useSelector((state) => state);

  const display = () => {
    switch (filter.status) {
      case "Completed":
        return todos.todos.map((todo) => {
          return (
            todo.completed && (
              <TodoLists
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                color={todo.color}
              />
            )
          );
        });
      case "Active":
        return todos.todos.map((todo) => {
          return (
            !todo.completed && (
              <TodoLists
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                color={todo.color}
              />
            )
          );
        });

      default:
        return todos.todos.map((todo) => {
          return (
            <TodoLists
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              color={todo.color}
            />
          );
        });
    }
  };
  return (
    <Container style={{ textAlign: "center", width: "80%" }}>
      <h1 className="text-danger mt-5 mb-4">Todos</h1>
      <Container className="shadow bg-white border p-0">
        <Input />
        {todos.todos.length === 0 ? <p>No Todos!</p> : display()}
        <Footer />
      </Container>
    </Container>
  );
};

export default App;
