export default function fetchPlanets(dispatch) {
  return (dispatch) => {
    fetch("http://localhost:3001/planets")
      .then((resp) => resp.json())
      .then((planets) => dispatch({ type: "FETCH_PLANETS", payload: planets }));
  };
}
