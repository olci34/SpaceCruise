export default function signIn(sentUser) {
  return (dispatch) => {
    const configUser = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({ user: sentUser }),
    };
    fetch("http://localhost:3001/signin", configUser)
      .then((resp) => resp.json())
      .then((receivedUser) =>
        dispatch({ type: "SIGN_IN", payload: receivedUser })
      );
  };
}
