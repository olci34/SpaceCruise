import UserForm from "./users/UserForm";
import { Link } from "react-router-dom";

export default function Greeting() {
  return (
    <div id="greeting">
      <h1 id='welcome-header'>Welcome to Wherever Space Cruise</h1>
      <p>Wherever you are in Solar System and</p>
      <p>wherever you want to go to in Solar System,</p>
      <p>We got you boo !</p>
      <UserForm serve="Sign In" />
      <br/>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}
