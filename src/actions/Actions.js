import { Types } from "./types";

export const todoAdded = (payload) => {
  return {
    type: Types.NEW_TODO,
    payload,
  };
};
export const toggleCompletedTodo = (payload) => {
  return {
    type: Types.TOGGLE_COMPLETED_TODO,
    payload,
  };
};
export const selectColor = ({ id, color }) => {
  return {
    type: Types.SELECT_COLOR,
    payload: {
      id,
      color,
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: Types.DELETE_TODO,
    payload: id,
  };
};
export const markAllTodo = () => {
  return {
    type: Types.MARK_ALL_TODO,
  };
};
export const clearTodo = () => {
  return {
    type: Types.CLEAR_TODO,
  };
};
export const filterTodo = (payload) => {
  return {
    type: Types.FILTER_TODO,
    payload,
  };
};

export const newColorFilter = (payload) => {
  return {
    type: Types.NEW_COLOR_FILTER,
    payload,
  };
};
export const removeColorFilter = (payload) => {
  return {
    type: Types.REMOVE_COLOR_FILTER,
    payload,
  };
};

// import axios from "axios";
// import { FETCH_POSTS, NEW_POST } from "./types";

// export const Ac = () => (dispatch) => {
//   console.log("fetching...");
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((response) =>
//       dispatch({
//         type: FETCH_POSTS,
//         payload: response,
//       })
//     )
//     .catch((error) => console.log(error));
// };
