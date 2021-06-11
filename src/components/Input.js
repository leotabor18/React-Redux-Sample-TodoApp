import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as actions from "../actions/Actions";

const Input = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const onSumbit = (e) => {
    e.preventDefault();
    dispatch(actions.todoAdded(text));
    setText("");
  };
  return (
    <Form onSubmit={onSumbit}>
      <Form.Group className="mb-3 input-group-lg" controlId="input">
        <Form.Control
          type="text"
          className="pl-4 border-0"
          placeholder="What needs to be done?"
          name="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </Form.Group>
    </Form>
  );
};

export default Input;
