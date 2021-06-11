import React from "react";
import { Dropdown } from "react-bootstrap";
import * as actions from "../actions/Actions";
import { useDispatch } from "react-redux";

const DropdownItems = ({ color, setTitle }) => {
  const dispatch = useDispatch();

  return (
    <Dropdown.Item
      style={{ textTransform: "Capitalize" }}
      onClick={() => {
        dispatch(actions.selectColor(color));
        setTitle(color);
      }}
    >
      {color}
    </Dropdown.Item>
  );
};

export default DropdownItems;
