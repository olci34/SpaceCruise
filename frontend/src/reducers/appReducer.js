export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      localStorage.setItem('userId', action.payload.id)
      return {
        ...state,
        user: { id: action.payload.id, name: action.payload.name },
      };
    case "SIGN_IN":
      localStorage.setItem('userId', action.payload.id)
      return {
        ...state,
        user: { id: action.payload.id, name: action.payload.name },
      };
    case "FETCH_PLANETS":
      return { ...state, planets: action.payload };
    case "FETCH_TRIPS":
      return {
        ...state,
        trips: action.payload.filter((trip) => trip.user.id === parseInt(localStorage.getItem('userId'),10)),
      };
    case "POST_TRIP":
      return { ...state, trips: [...state.trips, action.payload] };
    case "CANCEL_TRIP":
      return {
        ...state,
        trips: [...state.trips.filter((t) => t.id !== action.payload)],
      };
    case "EDIT_TRIP":
      return {
        ...state,
        trips: state.trips.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };
    case "LOG_OUT":
      localStorage.clear()
      debugger
      return { ...action.payload };
    case "ZOOM":
      return {
        ...state,
        stage: action.payload[0],
        zoomInPositions: action.payload[1],
      };
    default:
      return state;
  }
}
