// import { FETCH_POSTS, NEW_POST } from "../actions/types";
// import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Learn Docker", completed: false, color: "blue" },
    { id: 3, text: "Learn Golang", completed: false, color: "blue" },
  ],
};
// function nextTodoId(todos) {
//   const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
//   return maxId + 1;
// }

export default function todosReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "NEW_TODO":
      console.log(payload);
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: payload,
            completed: false,
          },
        ],
      };
    case "TOGGLE_COMPLETED_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== payload) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    case "SELECT_COLOR":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== payload.id) {
            return todo;
          }
          return {
            ...todo,
            color: payload.id,
          };
        }),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case "CLEAR_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (!todo.completed) {
            return todo;
          } else {
            return { ...todo, completed: false };
          }
        }),
      };
    case "MARK_ALL_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.completed) {
            return todo;
          } else {
            return { ...todo, completed: true };
          }
        }),
      };
    default:
      return state;
  }
}
