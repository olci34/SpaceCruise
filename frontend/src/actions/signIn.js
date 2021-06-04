export default function signIn(username) {
    return (dispatch) => {
        fetch('http://localhost:3000/signin')
            .then(resp => resp.json())
            .then(user => dispatch({type: 'SIGN_IN', payload: user}))
    }
}