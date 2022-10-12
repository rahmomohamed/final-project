import React, { useState } from "react";

async function newPerson(person, token) {
  return fetch("http://localhost:8000/persons", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(person),
  }).then((data) => data.json());
}

export default function NewPerson() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);

    await newPerson(
      {
        name,
        age,
        lat,
        lng,
      },
      userToken.token
    );
    window.location.replace("/");
  };

  return (
    <div className="HomePage">
      <div className="login">
        <h1>Missing Person Details</h1>

        <form onSubmit={handleSubmit}>
          <label>
            <p>Name</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <p>Age</p>
            <input type="number" onChange={(e) => setAge(e.target.value)} />
          </label>
          <label>
            <p>Latitude</p>
            <input type="text" onChange={(e) => setLat(e.target.value)} />
          </label>
          <label>
            <p>Longtitude</p>
            <input type="text" onChange={(e) => setLng(e.target.value)} />
          </label>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <button type="submit">Add Missing Person</button>
          </div>
        </form>
      </div>
    </div>
  );
}
