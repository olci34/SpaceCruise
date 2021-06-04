export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, user: {id: action.payload.id, name: action.payload.name } };
    case "SIGN_IN":
      // TODO: ERROR HANDLING
      return { ...state, user: {id: action.payload.id, name: action.payload.name } };
    case "FETCH_PLANETS":
      return { ...state, planets: action.payload };
    case "FETCH_TRIPS":
      return { ...state, trips: action.payload.filter(trip => trip.user.id === state.user.id) };
    case "POST_TRIP":
      return {...state, trips: [...state.trips, action.payload]}
    case "CANCEL_TRIP":
      return {...state, trips: [...state.trips.filter(t => t.id !== action.payload) ]}
    case "EDIT_TRIP":
      return {...state, trips: state.trips.map(t => t.id === action.payload.id ? action.payload : t)}
    case "LOG_OUT":
      return {...action.payload}
    default:
      return state;
  }
}
