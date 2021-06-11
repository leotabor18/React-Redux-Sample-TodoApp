import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import filtersReducer from "./filterReducer";

export default combineReducers({
  todos: todosReducer,
  filter: filtersReducer,
});
