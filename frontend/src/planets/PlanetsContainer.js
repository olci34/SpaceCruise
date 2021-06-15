import { connect } from "react-redux";
import fetchPlanets from "../actions/fetchPlanets";
import React, { Component } from "react";
import Planets from "./Planets";
import NavBar from "../NavBar";
import { Route, Switch } from "react-router";
import Planet from "./Planet";

class PlanetsContainer extends Component {
  componentDidMount() {
    this.props.fetchPlanets();
  }

  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/planets">
            <Planets />
          </Route>
          <Route path="/planets/:id">
            <Planet />
          </Route>
        </Switch>
      </>
    );
  }
}

export default connect(null, { fetchPlanets })(PlanetsContainer);

// export default function PlanetsContainer() {
//   const dispatch = useDispatch()
//   useEffect(() => dispatch(fetchPlanets()))
//   return(
//     <>
//         <NavBar />
//         <Switch>
//           <Route exact path="/planets">
//             <Planets />
//           </Route>
//           <Route path="/planets/:id">
//             <Planet />
//           </Route>
//         </Switch>
//       </>
//   )
// }