export default function addUser(user) {
  return (dispatch) => {
    const configUser = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({ user: user }),
    };
    fetch("http://localhost:3001/users", configUser)
      .then((resp) => resp.json())
      .then((user) => dispatch({ type: "ADD_USER", payload: user }));
  };
}
