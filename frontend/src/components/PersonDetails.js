import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPersonsApi } from "../redux/logic";

function PersonDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.logic);
  useEffect(() => {
    dispatch(getPersonsApi());
  }, []);

  const selectedPerson = persons.filter((person) => person.id === id);

  return (
    <div className="DetailPage">
      <div className="DetailCard">
        <div className="Head">
          <img
            src="https://api.lorem.space/image/face?w=150&h=150"
            alt={selectedPerson.name}
          />
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
          <div className="PersonInfo">
            <p>Status:</p>
            <p>{selectedPerson.status}</p>
          </div>
          <div className="PersonInfo">
            <p>Last Seen:</p>
            <p>{selectedPerson.lastSeen}</p>
          </div>
          <div className="PersonInfo">
            <p>Last Seen Coordinates:</p>
            <p>
              <iframe
                width="425"
                height="350"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-${selectedPerson.lat}%2C${selectedPerson.long}&amp;layer=mapnik`}
                style="border: 1px solid black"
              ></iframe>
              <br />
              <small>
                <a href="https://www.openstreetmap.org/#map=12/37.3199/-3.4864">
                  View Larger Map
                </a>
              </small>
            </p>
          </div>

          <div className="PersonInfo">
            <p>Tips from Communitry:</p>
            <p>
              <ul>
                {selectedPerson.tips?.map((tip) => (
                  <li>{tip}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonDetails;
