import UserForm from "./users/UserForm";
import { Link } from "react-router-dom";

export default function Greeting() {
  return (
    <div id="greeting">
      <h1>Greeting</h1>
      <UserForm serve="Sign In" />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}
