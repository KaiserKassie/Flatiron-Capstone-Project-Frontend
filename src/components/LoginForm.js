import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'

function LoginForm({login, setLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
        "password-confirmation": password
    }),
    }).then(handleErrors)
      .then((r) => r.json())
      .then((userData) => setLogin(userData))
      .catch(error => alert(error));

      navigate('/');
  }

  return(
    <div id="login-form">
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <Link to="/create_user">Create an account</Link>
    </div>
  );
}

export default LoginForm;