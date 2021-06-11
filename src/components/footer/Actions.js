import React from "react";
import Header from "./Header";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as actions from "../../actions/Actions";

const Actions = () => {
  const dispatch = useDispatch();
  return (
    <div className="actions">
      <Header header="Actions" />
      <Button className="my-1" onClick={() => dispatch(actions.markAllTodo())}>
        Mark all Completed
      </Button>
      <Button className="my-1" onClick={() => dispatch(actions.clearTodo())}>
        Clear Completed
      </Button>
    </div>
  );
};

export default Actions;
