import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPersonsApi } from "../redux/logic";

async function personFound(userId, token) {
  return fetch(`http://localhost:8000/persons/${userId}/found`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({}),
  }).then((data) => data.json());
}

async function submitTip(userId, name, info, token) {
  return fetch(`http://localhost:8000/persons/${userId}/tip`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      info: info,
    }),
  }).then((data) => data.json());
}

function PersonDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.logic);
  useEffect(() => {
    dispatch(getPersonsApi());
  }, []);

  const [name, setName] = useState();
  const [info, setInfo] = useState();

  const selectedPerson = persons.find((person) => person._id === id);

  const markFoundEvent = async (e) => {
    e.preventDefault();
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);

    await personFound(selectedPerson._id, userToken.token);
    window.location.replace("/");
  };

  const submitTipEvent = async (e) => {
    e.preventDefault();
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);

    await submitTip(selectedPerson._id, name, info, userToken.token);
    document.getElementById("name").value = "";
    document.getElementById("info").value = "";
    alert("Thank you for your tip!");
  };

  return (
    <div className="DetailPage">
      <div className="DetailCard">
        <div className="Head">
          <img
            src={`https://api.lorem.space/image/face?w=150&h=150&hash=${selectedPerson._id}`}
            alt={selectedPerson.name}
          />
          {
          selectedPerson?.status==="MISSING" ? 
                <button className="foundButton" onClick={markFoundEvent}>
                  Mark as Found
                </button> : null
          }
        </div>
        <div className="InfoContainer">
          <div className="PersonInfo">
            <p>Name:</p>
            <p>{selectedPerson.name}</p>
          </div>
          <div className="PersonInfo">
            <p>Age:</p>
            <p>{selectedPerson.age}</p>
          </div>
          <div className={`PersonInfo ${selectedPerson.status.toLowerCase()}`}>
            <p>Status:</p>
            <p>{selectedPerson.status}</p>
          </div>
          <div className="PersonInfo">
            <p>Last Seen:</p>
            <p>{selectedPerson.lastseen}</p>
          </div>
          <div className="PersonInfo">
            <p>Last Seen Coordinates:</p>
            <p>
              <iframe
                width="450"
                height="250"
                frameborder="0"
                style={{ border: 0 }}
                referrerpolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBxntcWB7sIVHC2xMTPT6yucOuLGjJcCbU&q=${selectedPerson.lat},${selectedPerson.lng}&zoom=10`}
                allowfullscreen
              ></iframe>
            </p>
          </div>

          <div className="PersonInfo">
            <p>Tips from Community:</p>
            <ul className="Tips">
              {selectedPerson?.tips?.map((tip) => (
                <li key={tip.name}>
                  {tip.name}: {tip.info}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {
          selectedPerson?.status==="MISSING" ? 
          <div className="InputContainer">
            <p>Help us with a tip</p>
            <form onSubmit={submitTipEvent} className="PersonInfo InputContainer">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                className="NameInput"
              />
              <input
                onChange={(e) => setInfo(e.target.value)}
                type="text"
                placeholder="Any helpful information ..."
                id="info"
                className="TipInput"
              />
              <button className="SendTip" type="submit">Send tip</button>
            </form>
          </div> : null
          }
      </div>
    </div>
  );
}

export default PersonDetails;
