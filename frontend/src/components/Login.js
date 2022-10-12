import React, { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };

  return (
    <div className="HomePage">
      <div className="login">
        <h1>Please Log In</h1>

        <form onSubmit={handleSubmit}>
          <label>
            <p>Email</p>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
