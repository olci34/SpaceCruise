export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}
