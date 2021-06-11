import React from "react";
import Header from "./Header";
import * as actions from "../../actions/Actions";
import { useDispatch } from "react-redux";

const FilterByStatus = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Header header="Filter by Status" />
      <div className="filter-group">
        <button
          className="filter-btn"
          onClick={() => dispatch(actions.filterTodo("All"))}
        >
          All
        </button>
        <button
          className="filter-btn"
          onClick={() => dispatch(actions.filterTodo("Active"))}
        >
          Active
        </button>
        <button
          className="filter-btn"
          onClick={() => dispatch(actions.filterTodo("Completed"))}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default FilterByStatus;
