export default function signIn(username) {
  return (dispatch) => {
    const configUser = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({ username: username }),
    };
    fetch("http://localhost:3001/signin", configUser)
      .then((resp) => resp.json())
      .then((user) => dispatch({ type: "SIGN_IN", payload: user }));
  };
}
