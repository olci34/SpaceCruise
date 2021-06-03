export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, user: { name: action.payload } };
    case "FETCH_PLANETS":
      return { ...state, planets: action.payload };
    case "FETCH_TRIPS":
      return { ...state, trips: action.payload };
    default:
      return state;
  }
}
