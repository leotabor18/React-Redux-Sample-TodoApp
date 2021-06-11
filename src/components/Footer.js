import React from "react";
import Actions from "./footer/Actions";
import FilterByStatus from "./footer/FilterByStatus";
import RemainingTodos from "./footer/RemainingTodos";
import FilterByColor from "./footer/FilterByColor";

const Footer = () => {
  return (
    <div className="d-flex justify-content-around border-top mt-5 py-3">
      {/* actions   */}
      <Actions />
      {/* Remaining todos */}
      <RemainingTodos />
      {/* Filter by status */}
      <FilterByStatus />
      {/* filter by color */}
      <FilterByColor />
    </div>
  );
};

export default Footer;
