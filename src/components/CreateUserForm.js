import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function CreateUserForm({login, setLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [firstName, setFirstName] = useState("");

  let navigate = useNavigate();

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.errors);
    }
    return response;
  }

  function handleSubmit(e) {
    e.preventDefault();
    password === passwordConfirm ? 
    fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
        "first_name": firstName
    }),
    }).then(handleErrors)
    .then(r => r.json())
    .then(r => alert("You may now log in"))
    .catch(error => alert(error)) : alert("Passwords must match");

    navigate('/login')
  } 

  return(
    <div id="create-user-form">
      <form onSubmit={handleSubmit} id="signupForm">
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          value={passwordConfirm}
          placeholder="confirm password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <input
          type="text"
          value={firstName}
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <button type="submit">Sign up!</button>
  </form>
    </div>
  );
}

export default CreateUserForm;