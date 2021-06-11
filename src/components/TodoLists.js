import React, { useState, useEffect } from "react";
import { InputGroup, Button } from "react-bootstrap";
import Dropdown from "./Dropdown";
import * as actions from "../actions/Actions";
import { useDispatch } from "react-redux";

const TodoLists = ({ id, color, text, completed }) => {
  const [complete, setComplete] = useState(completed);
  const dispatch = useDispatch();

  useEffect(() => {
    setComplete(completed);
  }, [completed]);
  return (
    <>
      <InputGroup className="border-top bg-white px-3 py-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <InputGroup.Checkbox
            aria-label="Checkbox for following text input"
            checked={complete}
            onChange={() => dispatch(actions.toggleCompletedTodo(id))}
          />
          <h4 className="ml-3 mb-0">{text}</h4>
        </div>
        <div className="d-flex align-items-center">
          <Dropdown color={color} />
          <Button
            className="mx-2 shadow-none"
            onClick={() => {
              dispatch(actions.deleteTodo(id));
            }}
          >
            x
          </Button>
        </div>
      </InputGroup>
    </>
  );
};

export default TodoLists;
