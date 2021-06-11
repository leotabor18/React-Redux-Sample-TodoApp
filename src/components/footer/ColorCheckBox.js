import React from "react";
import { InputGroup } from "react-bootstrap";

const ColorCheckBox = ({ color }) => {
  return (
    <InputGroup className="mb-2">
      <InputGroup.Checkbox
        className="checkbox-color"
        aria-label="Checkbox for following text input"
      />
      <span className="label" style={{ background: color }}></span>
      <p className="color mb-0">{color}</p>
    </InputGroup>
  );
};

export default ColorCheckBox;
