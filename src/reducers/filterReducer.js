const initialState = {
  status: "All",
  colors: [],
};

export default function filtersReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "FILTER_TODO": {
      return {
        ...state,
        status: payload,
      };
    }
    case "NEW_COLOR_FILTER": {
      return {
        ...state,
        color: [...state.color, payload],
      };
    }
    default:
      return state;
  }
}
