import React, { useState } from "react";
import { DropdownButton } from "react-bootstrap";
import DropdownItems from "./DropdownItems";

const Dropdown = ({ color }) => {
  const [title, setTitle] = useState(color);
  const colors = ["green", "blue", "orange", "purple", "red"];
  return (
    <DropdownButton
      title={title !== undefined ? title : "Color"}
      id="input-group-dropdown-2"
      align="end"
    >
      {colors.map((color, id) => (
        <DropdownItems key={id} color={color} setTitle={setTitle} />
      ))}
    </DropdownButton>
  );
};

export default Dropdown;
