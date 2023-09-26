const initialState = 0;
export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state > 0 ? state - 1 : 0;
    default:
      return state;
  }
}
