import React from "react";
import Header from "./Header";
import ColorCheckBox from "./ColorCheckBox";

const FilterByColor = () => {
  const colors = ["green", "blue", "orange", "purple", "red"];
  return (
    <div className="filter-color">
      <Header header="Filter by Color" />
      {colors.map((color, i) => {
        return <ColorCheckBox key={i} color={color} />;
      })}
    </div>
  );
};

export default FilterByColor;
