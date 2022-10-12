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

  const selectedPerson = persons.find((person) => person._id === id);

  return (
    <div className="DetailPage">
      <div className="DetailCard">
        <div className="Head">
          <img
            src={`https://api.lorem.space/image/face?w=150&h=150&hash=${selectedPerson?._id}`}
            alt={selectedPerson?.name}
          />
        </div>
        <div className="InfoContainer">
          <div className="PersonInfo">
            <p>Name:</p>
            <p>{selectedPerson?.name}</p>
          </div>
          <div className="PersonInfo">
            <p>Age:</p>
            <p>{selectedPerson?.age}</p>
          </div>
          <div className={`PersonInfo ${selectedPerson?.status.toLowerCase()}`}>
            <p>Status:</p>
            <p>{selectedPerson?.status}</p>
          </div>
          <div className="PersonInfo">
            <p>Last Seen:</p>
            <p>{selectedPerson?.lastseen}</p>
          </div>
          <div className="PersonInfo">
            <p>Last Seen Coordinates:</p>
            <p>
              <iframe
                title="maps"
                width="450"
                height="250"
                frameBorder="0"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBxntcWB7sIVHC2xMTPT6yucOuLGjJcCbU&q=${selectedPerson?.lat},${selectedPerson?.lng}&zoom=10`}
                allowFullScreen
              ></iframe>
            </p>
          </div>

          <div className="PersonInfo">
            <p>Tips from Community:</p>

            <ul>
              {selectedPerson?.tips?.map((tip) => (
                <li key={tip.name}>
                  {tip.name}: {tip.info}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonDetails;
